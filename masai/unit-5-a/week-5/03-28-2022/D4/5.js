// 
function joshNash(N, M, arr_A, arr_B) {
  let A = 0
  let B = 0
  let Ans = []
  while (A<N && B<M) {
      if (arr_A[A]==arr_B[B]) {
        Ans.push(arr_A[A])
        A++
        B++
      } else if (arr_A[A]<arr_B[B]) {
        Ans.push(arr_A[A])
        A++
      } else if (arr_A[A]>arr_B[B])  {
        Ans.push(arr_B[B])
        B++
      }
  }
    for (let i = A; i < N; i++) {
      Ans.push(arr_A[i])
    }
    for (let i = B; i < M; i++) {
      Ans.push(arr_B[i])
    }
  console.log(Ans.join(" "))
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < input.length; i+=4) {
    let N = +input[i]
    let arr_A = input[i+1].trim().split(" ").map(Number)
    let M = +input[i+2]
    let arr_B = input[i+3].trim().split(" ").map(Number)
    arr_A.sort((a, b) => a - b)
    arr_B.sort((a, b) => a - b)
    joshNash(N, M, arr_A, arr_B)
  }
}
// Ans 1 2 3 4 5 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  5
  9 4 8 2 6
  4
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
