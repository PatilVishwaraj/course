var KnightAfterMNSteps = (i, j, n) => {
  if (i<1 || i>9 || j<1 || j>9) {
    return
  } else {
    KnightAfterMNSteps(i, j, n)
    KnightAfterMNSteps(i, j, n)
    KnightAfterMNSteps(i, j, n)
    KnightAfterMNSteps(i, j, n)
    KnightAfterMNSteps(i, j, n)
    KnightAfterMNSteps(i, j, n)
    KnightAfterMNSteps(i, j, n)
    KnightAfterMNSteps(i, j, n)
  }
}

function runProgram(input) {
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
  var [i, j, n] = input.trim().split(" ").map(Number);
  KnightAfterMNSteps(i, j, n)

}

if (process.env.USERNAME === `Admin`) {
  runProgram(`3 3 1`);
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
