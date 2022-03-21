// Segregation of Odd & Even
function SOE(N, arr, Q) {
  var odd = []
  var even = []
  for (let i = 0; i < N; i++) {
    if (arr[i]%2===0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }
  if (Q===1) {
    console.log(even.join(" "),odd.join(" "))
  } else if (Q===2) {
    console.log(odd.join(" "),even.join(" "))
  }
}


function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0]
  for (let i = 1; i < test*3; i+=3) {
    let N = +input[i]
    let arr = input[i+1].trim().split(" ").map(Number)
    let Q = +input[i+2]
    SOE(N, arr, Q)
  }
}
// Ans 2 4 1 3 5
//     1 3 5 2 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  1 2 3 4 5
  1
  5
  1 2 3 4 5
  2`);
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
