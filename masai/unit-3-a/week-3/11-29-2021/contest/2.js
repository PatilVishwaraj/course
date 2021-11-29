  function newStr(N, str) {
    let stack = [];
    for (let i = 0; i < N; i++) {
      if (stack.length == 0) {
        stack.push(str[i]);
      } else {
        if (str[i] == stack[stack.length - 1]) {
          stack.pop();
        } else {
          stack.push(str[i]);
        }
      }
    }
    if (stack.length > 0) {
      return stack.join("");
    } else {
      return -1
    }
  }

  function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let str = input[1].trim().split("");
    console.log(newStr(N, str));
  }

  if (process.env.USERNAME === `PC`) {
    runProgram(`12
      abbabaadcbbc`);
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
