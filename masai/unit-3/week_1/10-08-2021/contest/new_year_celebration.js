function runProgram(input) {
  let stack = [];
  let s_point = -1;
  let queue = [];
  input = input.trim().split("\n");
  var n = +input[0];
  for (let i = 1; i <= n; i++) {
    var info = input[i].trim().split(" ").map(Number);
    var command = info[0];
    if (command == 1) {
      queue.push(info[1]);
    } else if (command == 2) {
      stack.push(info[1]);
      s_point++;
    } else if (command == 3) {
      if (queue.length == 0) {
        console.log(-1);
      } else {
        console.log(queue[0]);
      }
    } else if (command == 4) {
      if (s_point < 0) {
        console.log(-1);
      } else {
        console.log(stack[s_point]);
      }
    } else if (command == 5) {
      stack.push(queue[0]);
      s_point++;
      queue.shift();
    }
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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
