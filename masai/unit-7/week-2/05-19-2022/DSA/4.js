// Again a classical problem
var Ans
function checkBalance(Arr) {
  let N = Arr.length;
  if (N % 2) return;
  let stack = [];
  for (let i = 0; i < N; i++) {
    if (Arr[i] == "(" || Arr[i] == "[" || Arr[i] == "{") {
      stack.push(Arr[i]);
    } else {
      if (stack.length == 0) return;
      if (Arr[i] == ")" && stack.pop() !== "(") return;
      if (Arr[i] == "]" && stack.pop() !== "[") return;
      if (Arr[i] == "}" && stack.pop() !== "{") return;
    }
  }
  if (stack.length !== 0) return;
  Ans = "balanced"
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i <= tests; i++) {
    let Arr = input[i].trim().split("");
    Ans = "not balanced";
    checkBalance(Arr);
    console.log(Ans);
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
