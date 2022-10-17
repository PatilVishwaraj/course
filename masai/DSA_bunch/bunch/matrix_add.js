// Matrix Add
function AddMatrix(Matrix_1, Matrix_2, R1, C1) {
  for (let i = 0; i < R1; i++) {
    for (let j = 0; j < C1; j++) {
      Matrix_1[i][j] += Matrix_2[i][j]
    }
  }
  return Matrix_1
}
function runProgram(input) {
  input = input.trim().split("\n");
  let [R1, C1, R2, C2] = input[0].trim().split(" ").map(Number)
  let Matrix_1 = []
  let Matrix_2 = []
  for (let i = 1; i < input.length; i++) {
    if (i<=R1) {
      Matrix_1.push(input[i].trim().split(" ").map(Number))
    } else {
      Matrix_2.push(input[i].trim().split(" ").map(Number))
    }
  }
  if (R1===R2 && C1===C2) {
    let Ans = AddMatrix(Matrix_1, Matrix_2, R1, C1)
    for (let i = 0; i < R1; i++) {
      console.log(Ans[i].join(" "))
    }
  } else {
    console.log("-1")
  }
}
// Ans 3 5
//     7 9
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2 2 2 2
  1 2
  3 4
  2 3
  4 5`);
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
