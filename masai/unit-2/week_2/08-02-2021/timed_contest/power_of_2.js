function powerOf2(n) {
    if (n%2!==0 || n<0) {
        console.log('False')
    }
    else {
        for (let i = n ; i > 2 ;) {
            n = n/2
            i = n
        }
        if (n==2) {
            console.log('True')
        }
        else {
            console.log('False')
        }
    }
}

function runProgram(input) {
    var array = input.trim().split("\n").map(Number)
    var test = array[0]
    for (let i = 1; i <= test; i++) {
        var n = array[i]
        powerOf2(n)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`7
    -6701
    128
    -14793
    64
    -17368
    -32
    7623`);
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