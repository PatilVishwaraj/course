function rotateByK(n, k, series) {
  for (let i = 0; i < n; i++) {
    const element = array[i];
    
  }
}

function runProgram(input) {
input = input.trim().split('\n')
for (let i = 1; i < input.length; i+=2) {
  var [n, k] = input[i].trim().split(' ').map(Number);
  var series = input[i+1].trim().split(' ').map(Number);
  rotateByK(n, k, series)
}
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  2 1
  1 2
  2 2
  1 2
  3 1
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
