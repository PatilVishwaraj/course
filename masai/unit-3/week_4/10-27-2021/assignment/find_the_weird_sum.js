

function findSum(n, arr, curr, subset) {
  if (curr==n) {
    console.log()
  }
}


// int S[N]
// void allSubsets(curr,n, int[] subset) 
// {
//   if(pos == N) 
//   { 
//      print(subset)
//      return
//   }
//   // Try the current element in the subset.
//   subset[n] = S[pos]
//   allSubsets(pos+1, n+1, subset)
//   // Skip the current element.
//   allSubsets(pos+1, n, subset)
// }



function runProgram(input) {
    input = input.trim().split('\n')
    var tests = +input[0]
    var flag = false
    for (let i = 1; i < tests*2; i+=2) {
      let n = +input[i]
      let arr = input[i+1].trim().split(' ').map(Number)
      findSum(n, arr, 0, 0)
    }
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`1
    3
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
