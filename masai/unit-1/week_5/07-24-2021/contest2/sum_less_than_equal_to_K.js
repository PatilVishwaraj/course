function sumK(n, k, array) {
  var sum = 0
  for (let i = 0; i < n; i++) {
    if (array[i]<=k) {
      sum +=array[i]
    }
  }
  console.log(sum)
}

function runProgram(input) {
    var data = input.split("\n")
    var info = data[0].split(' ').map(Number)
    var n = info[0]
    var k = info[1]
    var array = data[1].split(' ').map(Number)
    sumK(n, k, array)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4 2\n1 2 3 4`);
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