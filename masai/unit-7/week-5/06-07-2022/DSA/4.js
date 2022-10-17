// Smart Consumer
function buy(N, c_cost, c_discount, Arr) {
  let discount = 0;
  for (let i = 0; i < N; i++) {
    if (Arr[i] < c_discount) {
      discount += Arr[i];
    } else {
      discount += c_discount;
    }
  }
  if (discount > c_cost) {
    return 'YES';
  } else {
    return 'NO';
  }
}
function runProgram(input) {
  input = input.trim().split('\n');
  let test = +input[0];
  for (let i = 1; i < test * 2; i += 2) {
    let [N, c_cost, c_discount] = input[i].trim().split(' ').map(Number);
    let Arr = input[i + 1].trim().split(' ').map(Number);
    console.log(buy(N, c_cost, c_discount, Arr));
  }
}
// Ans YES
//     NO
//     NO
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  4 30 10
  15 8 22 6
  4 40 10
  15 8 22 6
  4 34 10
  15 8 22 6`);
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
