var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var KnightAfterMNSteps = (i, j, n) => {
  if (i < 0 || i > 9 || j < 0 || j > 9) {
    return;
  } else if (n == 0) {
    board[i][j] = 1;
    return;
  } else {
    KnightAfterMNSteps(i + 2, j - 1, n - 1);
    KnightAfterMNSteps(i + 2, j + 1, n - 1);
    KnightAfterMNSteps(i - 2, j - 1, n - 1);
    KnightAfterMNSteps(i - 2, j + 1, n - 1);
    KnightAfterMNSteps(i + 1, j + 2, n - 1);
    KnightAfterMNSteps(i - 1, j + 2, n - 1);
    KnightAfterMNSteps(i + 1, j - 2, n - 1);
    KnightAfterMNSteps(i - 1, j - 2, n - 1);
  }
};

function runProgram(input) {
  var [i, j, n] = input.trim().split(" ").map(Number);
  var count = 0;
  KnightAfterMNSteps(i-1, j-1, n);
  // console.log(board)

  board.forEach((el) => {
    el.forEach((elem) => {
      if (elem == 1) {
        count++;
      }
    });
  });
  console.log(count)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4 10 1`);
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
