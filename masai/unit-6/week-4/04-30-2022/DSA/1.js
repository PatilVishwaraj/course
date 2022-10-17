// Hire or No Hire
function hire(N, salary, K) {
  let sum = 0
  for (let i = 0; i < N; i++) {
    sum += salary[i]
  }
  if (sum<=K) {
    return "Hire"
  } else {
    return "No Hire"
    
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*3; i+=3) {
    let N = +input[i]
    let salary = input[i+1].trim().split(" ").map(Number)
    let K = +input[i+2]
    console.log(hire(N, salary, K))
  }
  
}
// Ans Hire
//     No Hire
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  1 2 3 4 5
  15
  5
  1 2 3 4 5
  10`);
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
