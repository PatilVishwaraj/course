// Detective L
function traverseL(row, col, matrix) {
  console.log(row, col, matrix);
  let Ans = [];
  let start = 0;
  let bottom = N - 1;
  let left = 0;
  let right = M - 1;
}

function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < input.length; i = j) {
    let [row, col] = input[i].trim().split(' ').map(Number);
    let matrix = [];
    for (var j = i + 1; j <= i + row; j++) {
      let rows = input[j].trim().split(' ').map(Number);
    }
    console.log(traverseL(row, col, matrix));
  }
}
//  ans 1 4 7 10 11 12 2 5 8 9 3 6
//      1 4 7 8 9 2 5 6 3
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  4 3
  1 2 3
  4 5 6
  7 8 9
  10 11 12
  3 3
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
