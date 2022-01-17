function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 3; i += 3) {
    let N = +input[i];
    let ash = input[i + 1].trim().split(" ").map(Number);
    let gary = input[i + 2].trim().split(" ").map(Number);
    let ans = "Ash Finally Wins"
    ash.sort((a, b) => a - b);
    gary.sort((a, b) => a - b);
    for (let i = 0; i < N; i++) {
      if (ash[i]<=gary[i]) {
        ans = "Train Hard Again"
        break
      }
    }
    console.log(ans);
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3
  12 3 4
  5 4 1
  2
  1 5
  1 4`);
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
