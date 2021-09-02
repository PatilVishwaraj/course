function findPairs(n ,target, array) {
  var count = 0
    for (let i = 0; i < n; i++) {
      for (let j = i+1; j < n; j++) {
        var x = ((array[i]+array[j])%target !== 0)
        if (x) {
          count++
        }
      }
    }
    console.log(count)
}

function runProgram(input) {
    var data = input.split("\n")
    var test = Number(data[0])
    for (let i = 1; i < data.length; i+=2) {
        var info = data[i].split(' ').map(Number)
        var n = info[0]
        var target = info[1]
        var array = data[i+1].split(' ').map(Number)
        findPairs(n ,target, array)
    }
    
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2\n3 2\n1 3 2\n5 4\n3 2 2 1 5`);
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