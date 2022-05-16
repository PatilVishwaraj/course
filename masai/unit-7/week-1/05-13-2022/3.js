// Generate all subsequence
function generateSequence(str, ans, curr, n) {
  if (ans.length > 0) {
    console.log(ans.join(""));
  } else if (curr == n) {
    return;
  }
  for (let i = curr; i < n; i++) {
    ans.push(str[i]);
    generateSequence(str, ans, i + 1, n);
    ans.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let str = input[1].trim().split("");
  generateSequence(str, [], 0, n);
}
// Ans a
//     ab
//     abc
//     abcd
//     abd
//     ac
//     acd
//     ad
//     b
//     bc
//     bcd
//     bd
//     c
//     cd
//     d
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



