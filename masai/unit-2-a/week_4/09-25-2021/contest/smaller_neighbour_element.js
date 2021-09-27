function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var array = input[1].trim().split(" ").map(Number);
  var ans = [-1];
  var stack = [];
  stack.push(array[0]);
  for (let i = 1; i < n; i++) {
    for (let j = stack.length - 1; j >= 0; j--) {
      if (stack[j] < array[i]) {
        stack.push(array[i]);
        ans.push(stack[j]);
        break;
      }
    }
    if (ans.length == i) {
      ans.push(-1);
      while (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
        stack.pop();
      }
      stack.push(array[i]);
    }
  }
  console.log(ans.join(" "));
}

if (process.env.USERNAME === `PC`) {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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
