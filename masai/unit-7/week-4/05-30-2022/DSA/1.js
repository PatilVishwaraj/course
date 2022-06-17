// Detective L
function DetectiveL(N, M, matrix) {
  console.log(N, M, matrix);
  return 'end';
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < input.length; i = j) {
    let [N, M] = input[i].trim().split(' ').map(Number);
    let matrix = [];
    for (var j = i + 1; j <= i + N; j++) {
      let row = input[j].trim().split(' ').map(Number);
      matrix.push(row);
    }
    console.log(DetectiveL(N, M, matrix));
  }
}
// Ans 1 4 7 8 9 2 5 6 3
//     1 4 7 10 11 12 2 5 8 9 3 6
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3 3
  1 2 3
  4 5 6
  7 8 9
  4 3
  1 2 3
  4 5 6
  7 8 9
  10 11 12`);
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
