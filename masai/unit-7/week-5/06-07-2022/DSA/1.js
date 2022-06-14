// Pasta Man
function checkMood(N, M, noodles, days) {
  let bag = {};
  for (let i = 0; i < N; i++) {
    if (bag[noodles[i]]) {
      bag[noodles[i]]++;
    } else {
      bag[noodles[i]] = 1;
    }
  }
  for (let j = 0; j < M; j++) {
    if (bag[days[j]]) {
      if (bag[days[j]] > 1) {
        bag[days[j]]--;
      } else if (bag[days[j]] == 1) {
        delete bag[days[j]];
      }
    } else {
      return 'ANGRY';
    }
  }
  return 'HAPPY';
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 3; i += 3) {
    let [N, M] = input[i].trim().split(' ').map(Number);
    let noodles = input[i + 1].trim().split(' ').map(Number);
    let days = input[i + 2].trim().split(' ').map(Number);
    console.log(checkMood(N, M, noodles, days));
  }
}
// Ans HAPPY
//     ANGRY
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3 2
  1 1 3
  3 1
  1 1
  10
  1`);
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
