function generateAllSubsequence(N, str, curr, ans) {
  if (ans.length > 0) {
    console.log(ans.join(""));
  }
  if (curr === N) {
    return;
  }
  for (let i = curr; i < N; i++) {
    ans.push(str[i]);
    generateAllSubsequence(N, str, i + 1, ans);
    ans.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let str = input[1].trim().split("");
  generateAllSubsequence(N, str, 0, []);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
    abcd`);
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
