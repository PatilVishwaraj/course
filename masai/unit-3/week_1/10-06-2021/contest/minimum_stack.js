function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var min = [];
  var stack = [];
  for (let i = 1; i <= n; i++) {
    var con1 = false
    var con2 = false
    var info = input[i].trim().split(" ");
    var command = info[0];
    if (command == "push") {
      if (min.length == 0 || min[min.length - 1] > info[1]) {
        min.push(info[1]);
      }
      stack.push(info[1]);
    } else if (command == "pop") {
      if (stack[stack.length - 1] == min[min.length - 1]) {
        con1 = true
      }
      stack.pop();
      if (stack[stack.length - 1] !== min[min.length - 1]) {
        var con2 = true
      }
      if (con1 && con2) {
        min.pop();
      }
    } else if (command == "getMin") {
      console.log(min[min.length - 1]);
    }
  }
}

if (process.env.USERNAME === `PC`) {
  runProgram(`63
  push 57
  push 68
  push 77
  push 38
  push 23
  push 23
  push 72
  push 9
  push 70
  push 97
  push 21
  push 25
  push 84
  push 55
  push 16
  push 89
  push 36
  push 94
  push 89
  push 23
  push 13
  push 88
  push 6
  push 3
  push 52
  push 33
  push 82
  push 18
  push 17
  push 16
  push 84
  push 94
  push 83
  push 50
  push 61
  push 48
  push 96
  push 46
  push 55
  push 59
  push 86
  push 17
  push 78
  push 75
  push 49
  push 91
  push 12
  push 100
  push 97
  push 43
  push 10
  push 25
  push 60
  push 12
  push 31
  push 87
  push 25
  push 73
  push 91
  push 72
  push 65
  push 87
  push 75`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding(`ascii`);
  let read = ``;
  process.stdin.on(`data`, function (input) {
    read += input;
  });
  process.stdin.on(`end`, function () {
    read = read.replace(/\n$/, ``);
    read = read.replace(/\n$/, ``);
    runProgram(read);
  });
  process.on(`SIGINT`, function () {
    read = read.replace(/\n$/, ``);
    runProgram(read);
    process.exit(0);
  });
}
