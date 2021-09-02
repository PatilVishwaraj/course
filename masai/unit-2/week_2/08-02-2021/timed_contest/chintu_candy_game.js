function candyGame(balance) {
    var spent = 0
    for (let i = balance; i > 0; i) {
        if (i>=10) {
            spent += i-(i%10)
            i = i%10 + Math.floor(i/10)
        }
        else {
            spent+=i
            i = 0
        }
    }
    console.log(spent)
}

function runProgram(input) {
    var array = input.trim().split("\n").map(Number)
    var test = array[0]
    for (let i = 1; i <= test; i++) {
        var s = array[i]
        candyGame(s)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`6
    1
    10
    19
    9876
    12345
    1000000000`);
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