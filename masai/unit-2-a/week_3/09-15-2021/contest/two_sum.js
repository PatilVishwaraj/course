function findSumPair(N, sum, array) {
  var ans = "";
  for (let i = 0; i < N && ans == ""; i++) {
    for (let j = 0; j < N; j++) {
      if (array[i] + array[j] == sum && i !== j) {
        ans = i + " " + j;
        break;
      }
    }
  }
  if (ans == "") {
    console.log("-1 -1");
  } else {
    console.log(ans);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2) {
    var info = input[i].trim().split(" ");
    var N = +info[0];
    var sum = +info[1];
    var array = input[i + 1].trim().split(" ").map(Number);
    findSumPair(N, sum, array);
  }
}

if (process.env.USERNAME === `PC`) {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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
