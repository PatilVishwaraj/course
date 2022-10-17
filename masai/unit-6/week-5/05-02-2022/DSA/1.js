// Battle of Odd & Even
function BattleOddEven(N, Arr) {
  let oddsum = 0;
  let evensum = 0;
  for (let i = 0; i < N; i++) {
    if (Arr[i] % 2) {
      oddsum += Arr[i];
    } else {
      evensum += Arr[i];
    }
  }
  if (oddsum > evensum) return "Odd";
  return "Even";
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let Arr = input[1].trim().split(" ").map(Number);
  console.log(BattleOddEven(N, Arr));
}
// Ans Even
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  1 2 3 4`);
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
