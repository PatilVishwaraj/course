var pointer = -1;
var stack = {};

function stackPush(pointer, data) {
  stack[pointer] = data;
}
function stackPop() {
    if (pointer>-1) {
        pointer--;
    }
}
function stackTop() {
  if (pointer >= 0) {
    console.log(stack[pointer]);
  } else {
    console.log("Empty!");
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  for (let i = 1; i <= n; i++) {
    if (input[i].length == 1) {
      var command = +input[i];
    } else {
      var [command, data] = input[i].trim().split(" ").map(Number);
    }
    if (command == 1) {
        pointer++;
      stackPush(pointer, data);
    } else if (command == 2) {
      stackPop();
    } else if (command == 3) {
      stackTop();
    }
    // console.log("i:", i)
    // console.log("pointer:", pointer)
    // console.log("stack:", stack)
    // console.log("command:", command)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6
  1 15
  1 20
  2
  3
  2
  3`);
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
