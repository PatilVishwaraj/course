// 
function decode(N, arr) {
  if (N==0 || N==1) {
    return 1
  }
  let count = 0
  if (arr[N-1]>'0') {
    count = decode(N-1, arr)
  }
  if (arr[N - 2] == '2' && arr[N - 1] < '7' || arr[N - 2] == '1')
  {
      count += decode(N - 2, arr);
  }
  return count;
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 0; i < input.length; i++) {
    if (input[i]==0) {
      break
    } else {
      arr = input[i].trim().split("");
      let N = arr.length
      console.log(decode(N, arr))
    }
  }
  
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`25114
  1111111111
  3333333333
  0`);
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
