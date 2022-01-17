// Masai Airline

function airlineCheck(N, check_in, hand_bag) {
  for (let i = 0; i < N; i++) {
    if (check_in[i] > 15 || hand_bag[i] > 7) {
      console.log("Stop");
    } else {
      console.log("Boarding");
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let check_in = input[1].trim().split(" ").map(Number);
  let hand_bag = input[2].trim().split(" ").map(Number);
  airlineCheck(N, check_in, hand_bag);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  12 14 15 6
  8 5 7 4`);
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
