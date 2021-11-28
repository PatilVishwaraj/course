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

function followKnight(i, j, moves) {
  if (i < 0 || i > 9 || j < 0 || j > 9) {
    return;
  } else if (moves == 0) {
    board[i][j] = 1;
    return;
  } else {
    followKnight(i - 2, j + 1, moves - 1);
    followKnight(i - 2, j - 1, moves - 1);
    followKnight(i + 2, j + 1, moves - 1);
    followKnight(i + 2, j - 1, moves - 1);
    followKnight(i + 1, j - 2, moves - 1);
    followKnight(i - 1, j - 2, moves - 1);
    followKnight(i + 1, j + 2, moves - 1);
    followKnight(i - 1, j + 2, moves - 1);
  }
}

function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  var sum = 0
  followKnight(input[0]-1, input[1]-1, input[2]);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      sum += board[i][j]
    }
  }
  console.log(sum);
}


if (process.env.USERNAME === `PC`) {
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
