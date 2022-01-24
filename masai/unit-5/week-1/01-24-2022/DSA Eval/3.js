// DpNation - is it a subsequence
function checkSubsequence(sub, main) {
  let j = 0
  for (let i = 0; i < main.length && j<sub.length; i++) {
    if (sub[j]==main[i]) {
      j++
    }
  }
  if (j==sub.length) {
    console.log("YES")
  } else {
    console.log("NO")
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let sub = input[i].trim().split("");
    let main = input[i+1].trim().split("");
    checkSubsequence(sub, main)
  }
}
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  abc
  adbce
  ax
  xaa`);
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
