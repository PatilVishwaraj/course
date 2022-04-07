//
function oddEvenSort(N, arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] % 2) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  let Ans = odd.concat(even);
  return Ans.join(" ");
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  arr.sort((a, b) => a - b);
  console.log(oddEvenSort(N, arr));
}
// Ans
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  2 5 1 4 2`);
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
