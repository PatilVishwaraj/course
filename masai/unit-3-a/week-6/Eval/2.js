function countOccurences2(N, arr) {
  var digits = { 9: 0, 8: 0, 7: 0, 6: 0, 5: 0, 4: 0, 3: 0, 2: 0, 1: 0, 0: 0 };
  for (let i = 0; i < N; i++) {
    digits[9 - arr[i]]++;
  }
  console.log(Object.values(digits).join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  for (let i = 1; i < test * 2; i += 2) {
    let N = +input[i];
    let arr = input[i + 1].trim().split("").map(Number);
    countOccurences2(N, arr);
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
