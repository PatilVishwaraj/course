// Parity Sorting
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  let odd_arr = []
  let even_arr = []
  for (let i = 0; i < N; i++) {
    if (arr[i]%2==0) {
      even_arr.push(arr[i])
    } else {
      odd_arr.push(arr[i])
    }
  }
  even_arr.sort((a, b) => a-b)
  odd_arr.sort((a, b) => a-b)
  let Ans = odd_arr.concat(even_arr)
  console.log(Ans.join(" "))
}
// Ans 1 5 2 2 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  2 5 1 4 2`);
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
