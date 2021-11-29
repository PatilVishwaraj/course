function count123(N, arr) {
  let collection = { 0:0, 1:0, 2:0 }
  for (let i = 0; i < N; i++) {
    collection[arr[i]]++
  }
  console.log(Object.values(collection).join(' '))
}



function runProgram(input) {
    input = input.trim().split('\n')
    let N = +input[0]
    let arr = input[1].trim().split(' ').map(Number)
    count123(N, arr)
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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
  