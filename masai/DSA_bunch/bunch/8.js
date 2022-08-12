// Alan & Frequency
function runProgram(input) {
  input = input.trim().split("");
  // let Ans = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0}
  let result = {}
  for (let i = 0; i < input.length; i++) {
    Ans[input[i]]++
  }
  // for (const key in Ans) {
  //   if (Ans[key]>0) {
      
  //   }
  // }
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  aman`);
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
