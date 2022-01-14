// Cure a disease

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let meds_arr = input[1].trim().split(" ").map(Number)
  let patients_arr = input[2].trim().split(" ").map(Number)
  meds_arr.sort((a, b) => a-b)
  patients_arr.sort((a, b) => a-b)
  let ans = "Yes"
  for (let i = 0; i < N; i++) {
    if (patients_arr[i]>=meds_arr[i]) {
      ans = "No"
    }
  }
  console.log(ans)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  41 56 12 45 89
  10 10 10 10 10`);
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
