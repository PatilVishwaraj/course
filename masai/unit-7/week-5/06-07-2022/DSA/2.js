// Kitchen Roulette
function check(N, M, food, taboo_indices) {
  let max = null;
  for (let i = 0; i < N; i++) {
    if (max == null || max < food[i]) {
      max = food[i];
    }
  }
  for (let j = 0; j < M; j++) {
    if (food[taboo_indices[j] - 1] == max) {
      return 'YES';
    }
  }
  return 'NO';
}

function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 3; i += 3) {
    let [N, M] = input[i].trim().split(' ').map(Number);
    let food = input[i + 1].trim().split(' ').map(Number);
    let taboo_indices = input[i + 2].trim().split(' ').map(Number);
    console.log(check(N, M, food, taboo_indices));
  }
}
// Ans YES
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  5 3
  6 8 10 7 10
  2 3 4`);
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
