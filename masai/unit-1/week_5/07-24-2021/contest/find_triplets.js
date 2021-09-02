function findTriplet(n, target, array1) {
    
}

function runProgram(input) {
    var array = input.split("\n")
    for (let i = 1; i < array.length; i+=2) {
        var data = array[i].split(' ').map(Number)
        var n = data[0]
        var target = data[1]
        var array1 = array[i+1]
        findTriplet(n, target, array1)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2\n3 0\n1 2 3\n5 4\n3 2 3 1 5`);
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