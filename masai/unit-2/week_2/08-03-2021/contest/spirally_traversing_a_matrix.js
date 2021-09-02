function spiralTraverse(n, matrix) {
  var ans = ''
  var top = 0
  var bottom = 0
  var left = n-1
  var right = n-1
  for (let i = 0; i < n; i++) {
    const element = array[i]
    
  }
}

function runProgram(input) {
    var array = input.trim().split("\n")
    var n = Number(array[0])
    var matrix = []
    for (let i = 1; i <= n; i++) {
      matrix.push(array[i].trim().split(" ").map(Number))
    }
    spiralTraverse(n, matrix)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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