function behave(n, array) {
  var count = 0
  for (let i = 0; i < n-2; i++) {
    if (array[i]%2!==0 && array[i+1]%2!==0 && array[i+2]%2!==0) {
      console.log('Misbehave!')
      count++
    break
    }
  }
  if (count==0) {
    console.log('Behave!')
  }
}

function runProgram(input) {
    var data = input.split("\n")
    var test = Number(data[0])
    for (let i = 1; i < data.length; i+=2) {
      var n = Number(data[i])
      var array = data[i+1].split(' ').map(Number)
      behave(n, array)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2\n6\n1 3 3 4 5 6\n5\n1 2 3 4 5`);
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