function countSwap(n, matrix) {
    var wrong_up = 0
    var wrong_low = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i+j)<n-1 && matrix[i][j]=='+') {
                wrong_up++
            } else 
            if ((i+j)>=n && matrix[i][j]=='*') {
                wrong_low++
            }
        }
    }
    
    if (wrong_up==wrong_low) {
        console.log(wrong_low)
    }
    else {
        console.log(-1)
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=n+1) {
        var n = +input[i].trim()
        var matrix = []
        for (let j = i+1; j <= i+n; j++) {
            matrix.push(input[j].trim().split(''))
        }
        countSwap(n, matrix)
    }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3
  +*x
  +x*
  x+*
  2
  *x
  x*`);
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
