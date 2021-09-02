function makeGood(string) {
    var ans_str = ""
    for (let j = 0; j < string.length; j++) {
        if (string[j]!==string[j+1]) {
            ans_str += string[j]
        }
    }
    console.log(ans_str)
}

function runProgram(input) {
    var array = input.split("\n")
    var test = Number(array[0])
    for (let i = 1; i <= test; i++) {
        makeGood(array[i])
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3\nabb\naaab\nababa`);
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