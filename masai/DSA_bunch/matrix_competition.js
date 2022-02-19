// Matrix Competition
function MatrixCompetition(N, M, x, y, matrix_1, matrix_2) {
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      sum1 += matrix_1[i][j]
    }
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      sum2 += matrix_2[i][j]
    }
  }
  if (sum1>sum2) {
    console.log(sum1)
  } else {
    console.log(sum2)
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, M] = input[0].trim().split(" ").map(Number)
  let [x, y] = input[N+1].trim().split(" ").map(Number)
  let matrix_1 = []
  let matrix_2 = []
  for (let k = 1; k < input.length; k++) {
    if (k<N+1) {
      matrix_1.push(input[k].trim().split(" ").map(Number))
    } else if(k>N+1) {
      matrix_2.push(input[k].trim().split(" ").map(Number))
    }
  }
  MatrixCompetition(N, M, x, y, matrix_1, matrix_2)
}
// Ans 42
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 4
  1 2 3 4
  0 5 6 1
  9 3 0 8
  2 2
  8 8
  8 8`);
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
