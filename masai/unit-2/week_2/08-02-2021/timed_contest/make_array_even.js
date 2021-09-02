function evenArray(n ,series) {
  var ans = 'NO'
    for (let i = 0; i < n; i++) {
      if (n%2==0 || series[i]%2==0) {
        ans = 'YES'
        break
      }
    }
    console.log(ans)
}

function runProgram(input) {
    var array = input.trim().split("\n")
    for (let i = 1; i < array.length; i+=2) {
        var n = Number(array[i])
        var series = array[i+1].trim().split(" ").map(Number)
        evenArray(n ,series)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2
    1
    2
    3
    1 2 3`);
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