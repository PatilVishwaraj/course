function tallestAround(L, K, arr) {
  var ans = []
  for (let i = 0; i <= L-K; i++) {
    let gretest = 0
    for (let j = i; j < i+K; j++) {
      if (arr[j]>gretest) {
        gretest=arr[j]
      }
    }
    ans.push(gretest)
  }
  console.log(ans.join(' '))
}


function runProgram(input) {
    input = input.trim().split('\n')
    var test = +input[0]
    for (let i = 1; i < test*2; i+=2) {
      let [L, K] = input[i].trim().split(' ').map(Number)
      let arr = input[i+1].trim().split(' ').map(Number)
      tallestAround(L, K, arr)
    }
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`1
    9 3
    1 2 3 1 4 5 2 3 6`);
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
  