// Rotate the array - easy version
function rotate(N, K, arr) {
  K = K % N;
  if (K == 0) {
    return arr.join(" ");
  }
  let arr1 = arr.slice(0, N - K);
  let arr2 = arr.slice(N - K, N);
  let Ans = arr2.concat(arr1)
  return Ans.join(" ");
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let [N, K] = input[i].trim().split(" ").map(Number);
    let arr = input[i + 1].trim().split(" ").map(Number);
    console.log(rotate(N, K, arr));
  }
}
// Ans 3 1 2
//     1 2
//     2 1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  3 1
  1 2 3
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
