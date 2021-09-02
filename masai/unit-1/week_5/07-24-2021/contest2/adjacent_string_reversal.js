function stringReverse(n, string) {
  var ans_string = ''
  for (let j = 0; j < n; j+=2) {
    ans_string += string[j+1] + string[j]
  }
  console.log(ans_string)
}

function runProgram(input) {
    var array = input.split("\n")
    var tset = Number(array[0])
    for (let i = 1; i < array.length; i+=2) {
      var n = array[i]
      var string = array[i+1]
      stringReverse(n, string)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`1\n6\nrutwik`);
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