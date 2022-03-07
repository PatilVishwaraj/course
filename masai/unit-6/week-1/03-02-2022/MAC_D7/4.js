function checkSum(arr, sum, curr) {
  if (sum == 0) {
    flag = "Yes"
    return
  } else if (curr == arr.length) {
    return ;
  }
  for (let i = curr; i < arr.length; i++) {
    sum -= arr[i]
    checkSum(arr, sum, i + 1);
    sum += arr[i]
  }
}
var flag
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0]
  for (let i = 1; i < test*2; i+=2) {
    flag = "NO"
    var N = +input[i];
    var arr = input[1+i].trim().split(" ").map(Number);
    arr.sort((a,b) => a-b)
    let sum = arr.pop()
    checkSum(arr, sum, 0)
    console.log(flag)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  3
  1 2 3
  4
  0 1 2 3
  4
  2 3 6 10`);
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