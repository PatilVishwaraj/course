// Rotate the array - easy version
function rotateByN(N,K,arr) {
  let temp = K%N
  if (temp==0) {
    console.log(arr.join(" "))
  } else {
    K = temp
    console.log(K)
    let x = arr.slice(0,K)
    let y = arr.slice(K)
    console.log(x)
    console.log(y)
    console.log("=====")
  }
}


function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let [N, K] = input[i].trim().split(" ").map(Number);
    let arr = input[1 + i].trim().split(" ").map(Number);
    console.log(N, K, arr);
    rotateByN(N,K,arr)
  }
}
// Ans 3 1 2
//     1 2
//     2 1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  3 1
  1 2 3
  9 13
  1 2 3 4 5 6 7 8 9
  2 2
  1 2
  2 3
  1 2`);
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
