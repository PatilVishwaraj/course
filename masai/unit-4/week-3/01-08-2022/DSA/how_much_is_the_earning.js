// How much is the Earning?

function find_earning(N, R, heights) {
  let top = heights[0]
  let count = 1
  for (let i = 1; i < N; i++) {
    if (heights[i]>top) {
      count++
      top = heights[i]
    }
  }
  console.log(R * count)
}

function runProgram(input) {
  input = input.trim().split("\n");
  let streets = +input[0]
  for (let i = 1; i < streets*2; i+=2) {
    let [N, R] = input[i].trim().split(" ").map(Number)
    let heights = input[i+1].trim().split(" ").map(Number)
    find_earning(N, R, heights)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  6 3
  8 2 3 11 11 10
  5 12
  12 20 39 45 89`);
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
