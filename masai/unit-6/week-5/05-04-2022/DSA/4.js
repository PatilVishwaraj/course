// Counting Occurences of Digits 2
function countingOccurences(N,Arr) {
  let obj = { 9:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 0:0 }
  for (let i = 0; i < N; i++) {
    obj[Arr[i]]++
  }
  let res = ""
  for (let j = 9; j > 0; j--) {
    res = res + obj[j] + " "
  }
  res = res +  obj[0]
  return res
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i]
    let Arr = input[i+1].trim().split("").map(Number)
    console.log(countingOccurences(N,Arr))
  }
  
}
// Ans 0 0 0 0 0 0 1 2 2 0
//     0 0 0 0 2 1 1 2 0 0
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  21321
  6
  235452`);
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
