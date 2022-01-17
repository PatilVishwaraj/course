function check(n, matrix) {
  var [x, y] = [0, 0];
  var steps = 0;
  while (x < n && y < n && x >= 0 && y >= 0 && steps < n ** 2) {
    if (matrix[y][x] == 'L') {
      x--;
    } else if (matrix[y][x] == 'R') {
      x++;
    } else if (matrix[y][x] == 'U') {
      y--;
    } else if (matrix[y][x] == 'D') {
      y++;
    }
    steps++;
  }
  if (x < n && y < n && x >= 0 && y >= 0) {
    console.log(0);
  } else {
    console.log(steps);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += n + 1) {
    var n = +input[i];
    var matrix = [];
    for (let j = i + 1; j < i + n + 1; j++) {
      matrix.push(input[j].trim());
    }
    check(n, matrix);
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  4 
  RRRR
  LLLL
  UUUU
  DDDD
  3
  LRL
  UUU
  DLR
  2
  RL
  DD
  `);
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
