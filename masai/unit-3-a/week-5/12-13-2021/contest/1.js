var count = 0
function Plagiarism(arr, left, right, curr) {
    if (curr==arr.length) {
        let sum = 0
        for (let i = left; i <= right; i++) {
            sum += arr[i]
        }

    }
}


function runProgram(input) {
    input = input.trim().split('\n')
    let N = +input[0]
    let [left, right] = input[1].trim().split(' ').map(Number)
    let arr = []
    for (let i = 1; i <= N; i++) {
        arr.push(i)
    }
    Plagiarism(arr, left, right)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`3
    0 1`);
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
  