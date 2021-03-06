var ans_count = 0
function evenSubset(N, arr, subset, K, curr) {
  if (subset.length >= K) {
    console.log("1st",subset)
    let count = 0
    for (let i = 0; i < subset.length; i++) {
      if (subset[i]%2==0) {
        count++
      }
      if (count>=K) {
        ans_count++
        console.log(ans_count)
        break
      }
    }
  } else if (curr == N) {
    return;
  }
  for (let i = curr; i < N; i++) {
    subset.push(arr[i]);
    evenSubset(N, arr, subset, K, i + 1);
    subset.pop();
  }
}
function runProgram(input) {
    input = input.trim().split('\n')
    var test = +input[0]
    for (let i = 1; i < test*2; i+=2) {
      var ans_count = 0
      var[N,K] = input[i].trim().split(' ').map(Number)
      var arr = input[i+1].trim().split(' ').map(Number)
      evenSubset(N, arr, [], K, 0)
    }
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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
  