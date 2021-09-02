function runProgram(input) {
    var arr = input.split("\n")
    var data = arr[0].split(" ").map(Number)
    var r_limit = data[0]
    var c_limit = data[1]
    var array = []
    for (let i = 1; i < arr.length; i++) {
      array.push(arr[i].split(" ").map(Number))
    }
    var ans = []
    for (let c = c_limit-1; c >= 0; c--) {
      for (let r = 0; r < r_limit; r++) {
        ans.push(array[r][c])
      }
    }
    console.log(ans.join(" "))
}
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4 3\n1 8 9\n2 7 10\n3 6 11\n4 5 12`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }