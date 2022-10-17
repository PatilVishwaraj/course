// Valid Parentheses
function runProgram(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    console.log(stack);
    let end = stack.pop();
    if (s[i] == `(` || s[i] == `[` || s[i] == `{`) {
      stack.push(s[i]);
    } else if (s[i] == `)` && end !== `(`) {
      console.log(false);
      return;
    } else if (s[i] == `]` && end !== `[`) {
      console.log(false);
      return;
    } else if (s[i] == `}` && end !== `{`) {
      console.log(false);
      return;
    }
  }
  if (stack.length == 0) {
    console.log(true);
    return;
  } else {
    console.log(false);
    return;
  }
}
// Ans true
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`"{[]}"`);
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
