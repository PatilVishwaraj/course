// Two Sorted Arrays
function findMatch(N, arr_A, arr_B) {
  let A = 0
  let B = 0
  let count = 0
  while (A<N && B<N) {
    if (arr_A[A]==arr_B[N-1-B]) {
      count++
      A++
      B++
    } else if (arr_A[A]>arr_B[N-1-B]) {
      B++
    } else {
      A++
    }
  }
  console.log(count)
}


function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < input.length; i+=3) {
    let N = +input[i]
    let arr_A = input[i+1].trim().split(" ").map(Number)
    let arr_B = input[i+2].trim().split(" ").map(Number)
    findMatch(N, arr_A, arr_B)
  }
}
// Ans 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  6
  1 2 2 3 4 5
  4 4 3 2 1 1`);
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
