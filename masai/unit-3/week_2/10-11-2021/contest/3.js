function findTime(n, arr1, arr2) {
  var rotate = -1
  for (let i = 0; i < n; i++) {
    if (arr1==arr2) {
      break
    } else {
      arr1.push(arr1)
      arr1.shift()
      rotate++
    }
  }
  var ans = rotate+n
  console.log(ans)
}

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0]
    var arr1 = input[1].trim().split(' ').map(Number)
    var arr2 = input[2].trim().split(' ').map(Number)
    findTime(n, arr1, arr2)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`3
    3 2 1
    1 3 2`);
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
  