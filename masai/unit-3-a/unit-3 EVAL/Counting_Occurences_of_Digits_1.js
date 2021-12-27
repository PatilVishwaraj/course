function countOccernce(N, arr) {
  var bag = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (let i = 0; i < N; i++) {
    bag[arr[i]]++;
  }
  console.log(Object.values(bag).join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  var tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    var N = +input[i];
    var arr = input[i + 1].trim().split("");
    countOccernce(N, arr);
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
    5
    21321
    6
    235452`);
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
