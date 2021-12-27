function SNE2(N, arr) {
  let stack = arr[N - 1];
  var count = 0;
  for (let i = N - 2; i >= 0; i--) {
    if (stack < arr[i]) {
      count++;
    } else {
      stack = arr[i];
    }
  }
  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  SNE2(N, arr);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
    4 2 1 3 7`);
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
