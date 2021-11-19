function findPossibilities(n, ans, pointer) {
    console.log(ans.join(" "));
  if (pointer>n) {
    return
  }
  for (let i = pointer; i <= n; i++) {
    ans.push(i)
    findPossibilities(n, ans, i+1)
    ans.pop()
  }
}


function runProgram(input) {
  findPossibilities(+input, [], 1)
  }
  
  if (process.env.USERNAME === `Admin`) {
    runProgram(`3`);
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
  