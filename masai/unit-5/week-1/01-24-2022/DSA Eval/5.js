// Detective L
function traverseL(row, col, matrix) {
  let Ans = [];
  let r1 = 0;
  let c1 = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < array.length; j++) {
      const element = array[j];
    }
  }
}

function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  let i = 1;
  for (let z = 0; z < tests; z++) {
    let [row, col] = input[i].trim().split(' ').map(Number);
    let matrix = [];
    for (var j = i + 1; j <= i + N; j++) {
      matrix.push(input[j].trim().split(' ').map(Number));
    }
    // console.log(N, M, matrix)
    i = j;
    traverseL(N, M, matrix);
  }
}
//  ans 1 4 7 10 11 12 2 5 8 9 3 6
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
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
