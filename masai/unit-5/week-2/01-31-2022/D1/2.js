// Frequency Between Range
function FBR(arr, start, end, value) {
  let count = 0;
  for (let j = start - 1; j < end; j++) {
    if (arr[j] == value) {
      count++;
    }
  }
  return count;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, Q] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  for (let i = 2; i < 2 + Q; i++) {
    let [start, end, value] = input[i].trim().split(" ").map(Number);
    console.log(FBR(arr, start, end, value));
  }
}
// Ans 2
//     1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6 2
  1 5 3 2 3 2 
  3 6 2
  4 4 2
  `);
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
