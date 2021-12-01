function checkSumK(n, k, arr) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const element = array[j];
            
        }
        
    }
}

function runProgram(input) {
input  = input.trim().split('\n')
for (let i = 1; i < input.length; i+=2) {
    var [n, k] = input[i].trim().split(' ').map(Number)
    var arr = input[i+1].trim().split(' ').map(Number)
    checkSumK(n, k, arr)
}
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  5 2
  3 4 0 2 7`);
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
