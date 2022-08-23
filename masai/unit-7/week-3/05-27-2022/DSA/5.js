// Where do I Fit
function findPlace(K, Arr) {
  let N = Arr.length;
  if (K < Arr[0]) {
    return 'Front ' + Arr[0];
  } else if (K > Arr[N - 1]) {
    return Arr[N - 1] + ' Last';
  } else {
    for (let i = 0; i < N - 1; i++) {
      if (Arr[i] < K && K < Arr[i + 1]) {
        return Arr[i] + ' ' + Arr[i + 1];
      }
    }
  }
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let K = +input[i];
    let Arr = input[i + 1].trim().split(' ').map(Number);
    console.log(findPlace(K, Arr));
  }
}
// Ans 1 4
//     2 6
//     Front 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  3
  1 4 5 6 8 9
  5 
  1 2 6 7 8
  1
  2 3 4 5 6`);
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
