function removeduplicate(arr) {
  
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    for (let i = 1; i <= test; i++) {
      let arr = input[i].trim().split('')
      let N = arr.length
      console.log(removeduplicate(arr, 0, N))
    }
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`4
    azxxxzy
    caaabbbaac
    gghhg
    aaaacddddcappp`);
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
  