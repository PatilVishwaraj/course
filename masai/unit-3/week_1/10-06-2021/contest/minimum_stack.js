function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var min = [];
  var stack = [];
  var s_top = -1
  var m_top = -1

  for (let i = 1; i <= n; i++) {
    var info = input[i].trim().split(" ");
    var command = info[0];
    if (command == "push") {
      if (m_top == -1 || min[m_top] >= info[1]) {
        min.push(info[1]);
        m_top++
      }
      stack.push(info[1]);
      s_top++
    } else if (command == "pop") {
      if (stack[s_top] == min[m_top]) {
        min.pop();
        m_top--
      }
      stack.pop();
      s_top--
    } else if (command == "getMin") {
      console.log(min[m_top]);
    }
  }
}

if (process.env.USERNAME === `Admin`) {
  runProgram(`8
  push 5
  push 3
  push 1
  push 1
  getMin
  pop
  getMin
  pop
  getMin`);
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
