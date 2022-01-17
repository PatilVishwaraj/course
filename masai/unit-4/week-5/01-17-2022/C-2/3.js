// Masai Packers & Movers II

function checkTransport(K, capacity, pointer) {
  if (K == 0) {
    min = 0;
    max = 0;
    posibility = true;
    return;
  } else if (K < 0) {
    return;
  }
  for (let i = 0; i < N; i++) {
    K -= capacity[pointer];
    checkTransport(K, capacity, pointer + 1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let capacity = input[1].trim().split(" ").map(Number);
  var posibility = false;
  var min = 0;
  var max = 0;
  checkTransport(K, capacity, 0);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 3
  1 2 3`);
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
