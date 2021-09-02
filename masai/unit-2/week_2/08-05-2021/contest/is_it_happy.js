function checkHappy(array) {
    var sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]**2
    }
    if (el==1) {
        return true
    }
    else {
        return false
    }
}

function runProgram(input) {
    var input = input.trim().split("\n")
    var test = Number(input[0])
    console.log(test)
    for (let i = 1; i <= test; i++) {
        var array = input[i].trim().split("").map(Number)
        checkHappy(array)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3
    19
    2
    312082396
    `);
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