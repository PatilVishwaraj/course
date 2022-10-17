// Digit Sum Array
function digitSum(N, Arr) {
  for (let i = 0; i < N; i++) {
    let digit = Arr[i] + ""
    let M = digit.length
    if (M>1) {
      // console.log(M)
      let sum = 0
      for (let j = 0; j < M; j++) {
        sum += +digit[j]
      }
      Arr[i] = sum
    }
  }
  return Arr.join(" ")
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i]
    let Arr = input[i+1].trim().split(" ").map(Number)
    console.log(digitSum(N, Arr))
  }
  
}
// Ans 3 5 7 8 11 
//     1 2 3 4 5 6 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  12 14 16 17 29
  6
  1 2 3 4 5 51`);
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
