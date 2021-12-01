var count =0
function oddSubset(arr, sum, curr) {
  if (sum%2==1) {
    count++
  }
  if (curr==arr.length) {
    return
  }
  for (let i = curr; i < arr.length; i++) {
    oddSubset(arr, sum, i+1)
    oddSubset(arr, sum + arr[i], 1+i)
  }
}



function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0]
    var arr = input[1].trim().split(' ').map(Number)
    oddSubset(arr, 0, 0)
  console.log(count)
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`3
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
  