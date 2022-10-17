// Detect Palindrome II
function detectPalindrome(N, Arr) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (obj[Arr[i]]) {
      obj[Arr[i]]++;
    } else {
      obj[Arr[i]] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] % 2 == 1) {
      count++
    }
  }
  if (count>1) return "Not Possible!"
  return "Possible!"
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i] + z;
    let Arr = input[i + 1].trim().split("");
    console.log(detectPalindrome(N, Arr));
  }
}
// Ans Possible!
//     Not Possible!
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  6
  aabbcc
  5
  aabcd`);
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
