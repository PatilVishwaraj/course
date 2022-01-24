// Government Allocation
function runProgram(input) {
  input = input.trim().split("\n");
  let [applicants, houses, diff] = input[0].trim().split(" ").map(Number)
  houses--
  applicants--
  let required = input[1].trim().split(" ").map(Number)
  let available = input[2].trim().split(" ").map(Number)
  let ans = 0
  required.sort((a, b)=> a-b)
  available.sort((a, b)=> a-b)
  while (applicants>0 && houses>0) {
    let X =required[applicants]-available[houses]
    if (X>=(-diff) && X<=diff) {
      ans++
      applicants--
      houses--
    } else {
      if (X>0) {
        applicants--
      } else {
        houses--
      }
    }
  }
  console.log(ans)
}
//  ans 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4 3 5
  60 45 80 60
  30 60 75`);
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
