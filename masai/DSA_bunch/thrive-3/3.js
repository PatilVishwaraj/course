// String Power Calculator II
function strPowerCalc(N, str) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < N; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u'
    ) {
      x++;
    } else {
      y++;
    }
  }
  let vowel = 5 * x;
  let consonant = 7 * y;
  let Ans = vowel + consonant;
  return Ans;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let str = input[1].trim().split('');
  console.log(strPowerCalc(N, str));
}
// Ans 38
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6
  ankush`);
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
