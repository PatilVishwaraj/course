// Arrange discs
function runProgram(input) {
  function tower(N, arr) {
    let height = (arr[0]%10)
    console.log(arr[0])
    for (let i = N-2; i > 0; i--) {
      // if (arr[i]) {
        
      // } else {
        
      // }
      
    }
  }
  input = input.trim().split("\n");
  let N
  for (let i = 1; i < input.length; i+=N+1) {
    N = +input[i]
    let arr = []
    for (let j = i+1; j <= i+N; j++) {
      let X = input[j].trim().split(" ")
      let Y = +(X.join(""))
      arr.push(Y)
    }
    arr.sort((a, b)=> a-b)
    tower(N, arr)
  }
    
}
// Ans 5
//     12
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3
  4 3
  1 4
  3 2
  5
  5 6
  4 3
  1 2
  7 5
  3 4`);
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
