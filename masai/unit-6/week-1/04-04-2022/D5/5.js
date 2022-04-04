// Rotate by 90 Clockwise
function rotateBy90Clockwise(N, matrix){
  for (let j = 0; j < N; j++) {
    let row = []
    for (let i = N-1; i >= 0; i--) {
      row.push(matrix[i][j])
    }
    console.log(row.join(" "))
  }
}
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  
}
// Ans 5 1 5 1 
//     6 2 6 2 
//     7 3 7 3 
//     8 4 8 4 
//     7 4 1 
//     8 5 2 
//     9 6 3 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8
  3
  1 2 3
  4 5 6
  7 8 9`);
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
