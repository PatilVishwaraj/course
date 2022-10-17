// 3D Array
function runProgram(input) {
  input = input.trim().split('\n');
  let [x, y, z] = input[0].trim().split(' ').map(Number);
  let array = input[1].trim().split(' ').map(Number);
  let N = x * y * z;
  let count = 0;
  let row = [];
  let rowlength = 0;
  while (count < N) {
    row.push(array[count]);
    if (count % y) {
    }
    console.log(row.join(' '));
    count++;
  }
}
// Ans
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2 2 2
  1 2 3 4 5 6 7 8`);
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
