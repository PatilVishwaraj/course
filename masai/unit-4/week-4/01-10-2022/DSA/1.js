// Challenge 1E
function assureWin(frnd1, frnd2, set_a, set_b) {
  let top = set_b[frnd2-1]
  let money = 0
  for (let i = 0; i < frnd1; i++) {
    if (set_a[i]<=top) {
      let diff = top-set_a[i]+1
      money += diff
    } else {
      break
    }
  }
  console.log(money)
}

function runProgram(input) {
  input = input.trim().split("\n");
  let frnd1 = +input[0]
  let set_a = input[1].trim().split(" ").map(Number)
  let frnd2 = +input[2]
  let set_b = input[3].trim().split(" ").map(Number)
  set_a.sort((a, b) => a-b)
  set_b.sort((a, b) => a-b)
  assureWin(frnd1, frnd2, set_a, set_b)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  1 3 10
  2
  3 4`);
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

