// Perform Merging
function sortedMerge(N, arr_A, arr_B) {
  let A = 0
  let B = 0
  let Ans = []
  while (A<N && B<N) {
      if (arr_A[A]==arr_B[B]) {
        Ans.push(arr_A[A])
        A++
        Ans.push(arr_B[B])
        B++
      } else if (arr_A[A]<arr_B[B]) {
        Ans.push(arr_A[A])
        A++
      } else if (arr_A[A]>arr_B[B])  {
        Ans.push(arr_B[B])
        B++
      }
  }
  if (A<B) {
    for (let i = A; i < N; i++) {
      Ans.push(arr_A[i])
    }
  } else if (A>B){
    for (let i = B; i < N; i++) {
      Ans.push(arr_B[i])
    }
  }
  console.log(Ans.join(" "))
}


function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr_A = input[1].trim().split(" ").map(Number)
  let arr_B = input[2].trim().split(" ").map(Number)
  sortedMerge(N, arr_A, arr_B)
}
// Ans 1 2 4 5 6 7 8 9
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  1 5 7 9
  2 4 6 8`);
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
