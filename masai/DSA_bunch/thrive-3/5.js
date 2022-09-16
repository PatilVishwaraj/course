// Rotate the array - easy version
function rotateTheArray(N, K, arr) {
  let R = K % N;
  let part1 = arr.slice(0, N - R);
  let part2 = arr.slice(N - R);
  let result = part2.concat(part1);
  return result.join(' ');
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let [N, K] = input[i].trim().split(' ').map(Number);
    let arr = input[i + 1].trim().split(' ').map(Number);
    console.log(rotateTheArray(N, K, arr));
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
