// Opp Quick Sort
function oppQuickSort(Arr) {
  let N = Arr.length;
  if (N <= 1) return Arr;
  let Left = [];
  let Right = [];
  let Pointer = Arr.pop();
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > Pointer) {
      Right.push(Arr[i]);
    } else {
      Left.push(Arr[i]);
    }
  }
  return oppQuickSort(Right).concat(Pointer, oppQuickSort(Left));
}
function runProgram(input) {
  input = input.trim().split('\n');
  let Arr = input[1].trim().split(' ').map(Number);
  console.log(oppQuickSort(Arr).join(' '));
}
// Ans 5 4 3 2 1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  2 3 1 4 5`);
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
