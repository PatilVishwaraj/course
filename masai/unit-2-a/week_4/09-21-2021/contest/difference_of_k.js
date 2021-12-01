function checkDiffK(n, k, arr) {
    var count = 0
  for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
        if (arr[j]-arr[i]==k) {
            count++
            i++
            j = i+1
        }
    }
  }
  if (count>0) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2) {
    var [n, k] = input[i].trim().split(" ").map(Number);
    var arr = input[i + 1].trim().split(" ").map(Number);
    checkDiffK(n, k, arr);
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5 3
  1 2 3 4 5
  5 8
  1 2 3 4 5 `);
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
