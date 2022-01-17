function runProgram(input) {
  input = input.trim().split("\n");
  var [n, m] = input[0].trim().split(" ").map(Number);
  for (let i = 1; i <= n; i++) {
    var ans = "No";
    var row = input[i].trim().split(" ");
    for (let j = 0; j < m; j++) {
      if (
        row[j] == "a" ||
        row[j] == "e" ||
        row[j] == "i" ||
        row[j] == "o" ||
        row[j] == "u"
      ) {
        ans = "Yes";
        break;
      }
    }
    console.log(ans);
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 2
    a b
    c d
    e f`);
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
