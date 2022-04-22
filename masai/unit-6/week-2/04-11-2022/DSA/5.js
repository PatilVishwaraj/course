// Again a classical problem
function check(arr) {
  let stack = [];
  let N = arr.length;
  for (let i = 0; i < N; i++) {
    if (arr[i] === "{" || arr[i] === "(" || arr[i] === "[") {
      stack.push(arr[i]);
    } else if (arr[i] === "}") {
      if (stack === []) {
        return "not balanced";
      }
      let temp = stack.pop();
      if (temp !== "{") {
        return "not balanced";
      }
    } else if (arr[i] === ")") {
      if (stack === []) {
        return "not balanced";
      }
      let temp = stack.pop();
      if (temp !== "(") {
        return "not balanced";
      }
    } else if (arr[i] === "]") {
      if (stack === []) {
        return "not balanced";
      }
      let temp = stack.pop();
      if (temp !== "[") {
        return "not balanced";
      }
    }
  }
  // console.log(stack)
  if (stack.length == 0) {
    return "balanced";
  } else {
    return "not balanced";
  }
}
//
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i <= tests; i++) {
    let arr = input[i].trim().split("");
    console.log(check(arr));
  }
}
// Ans balanced
//     balanced
//     not balanced
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  {([])}
  ()
  ([]`);
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
