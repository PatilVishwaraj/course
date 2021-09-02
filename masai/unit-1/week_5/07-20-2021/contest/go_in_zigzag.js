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
    for (let r = 0; r < r_limit; r++) {
      if ((r%2)==0) {
        for (let c = c_limit-1; c >= 0; c--) {
          ans.push(array[r][c])
        }
      }
      else {
        for (let c = 0; c < c_limit; c++) {
          ans.push(array[r][c])
        }
      }
    }
    console.log(ans.join(" "))
}
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5 5\n4 7 1 1 7\n8 9 9 6 1\n6 4 9 5 1\n7 7 4 7 7\n8 6 2 5 5`);
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
  