// Walk in the Park
function checkMap(N, M, map) {
  let reff = [];
  let count = 0;
  let pointer = [0, 0];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < M; j++) {
      row.push(1);
    }
    reff.push(row);
  }
  while (
    pointer[0] >= 0 &&
    pointer[0] < N &&
    pointer[1] >= 0 &&
    pointer[1] < M
  ) {
    if (reff[pointer[0]][pointer[1]] == 1) {
      reff[pointer[0]][pointer[1]] = 0;
    } else {
      break;
    }
    count++;
    if (map[pointer[0]][pointer[1]] == 'L') {
      pointer[1]--;
    } else if (map[pointer[0]][pointer[1]] == 'R') {
      pointer[1]++;
    } else if (map[pointer[0]][pointer[1]] == 'U') {
      pointer[0]--;
    } else if (map[pointer[0]][pointer[1]] == 'D') {
      pointer[0]++;
    }
  }
  return count;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < input.length; i++) {
    let [N, M] = input[i].trim().split(' ').map(Number);
    let map = [];
    for (let j = i + 1; j <= i + N; j++) {
      let row = input[j].trim().split('');
      map.push(row);
    }
    console.log(checkMap(N, M, map));
    i += N;
  }
}
// Ans 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  3 4
  RRDR
  LLUD
  LLLL`);
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
