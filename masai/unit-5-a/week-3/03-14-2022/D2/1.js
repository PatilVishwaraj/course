// Two Arrays One Product
function answer(N, A, B) {
  let ans = 1
  for (let i = 0; i < N; i++) {
    ans*=(A[i]*B[i])
    
  }
  return ans
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*3; i+=3) {
    let N = +input[i]
    let A = input[i+1].trim().split(" ").map(Number)
    let B = input[i+2].trim().split(" ").map(Number)
    console.log(answer(N, A, B))
  }
}
// Ans 36
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  3
  1 2 3
  2 3 1`);
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
