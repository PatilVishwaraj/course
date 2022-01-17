// Even Count Returns

function countEvenAfter(arr) {
  let N = arr.length;
  let count = 0;
  let ans = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  for (let j = 0; j < N; j++) {
    ans.push(count);
    if (arr[j] % 2 === 0) {
      count--;
    }
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  input = input.trim().split("").map(Number);
  countEvenAfter(input);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`574674546476`);
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
