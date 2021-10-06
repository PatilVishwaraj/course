function selectBalls(n, m, arr) {
    var count = 0
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n ; j++) {
            if (arr[i]==arr[j] && i!==j) {
                count++
            }
        }
    }
    console.log(count)
}
function runProgram(input) {
    input = input.trim().split('\n')
    var [n, m] = input[0].trim().split(' ').map(Number)
    var arr = input[1].trim().split(' ').map(Number)
    var n = arr.length
    for (let i = 0; i < n; i++) {
        var temp = arr[i]
        arr.splice(i, 1)
        selectBalls(n, m, arr)
        arr.splice(i, 0, temp)
    }
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`5 3
    1 1 1 2 2`);
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
  