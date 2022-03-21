// a and b only
function runProgram(input) {
  let str = input.trim().split("");
  let N =str.length
  for (let i = 0; i < N; i++) {
    if (str[i]==="?") {
      if (str[i-1]==="a" || str[i+1]==="a") {
        str[i] = "b"
      } else {
        str[i] = "a"
      }
    }
  }
  console.log(str.join(""))
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`?ba??b`);
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
