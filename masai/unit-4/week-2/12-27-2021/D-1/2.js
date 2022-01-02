function findUnique(N, arr) {
  var checker = {};
  for (let i = 0; i < N; i++) {
    if (checker[arr[i]]) {
      delete checker[arr[i]];
    } else {
      checker[arr[i]] = 1;
    }
  }
  console.log(Object.keys(checker)[0]);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let arr = input[i + 1].trim().split(" ").map(Number);
    findUnique(N, arr);
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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
