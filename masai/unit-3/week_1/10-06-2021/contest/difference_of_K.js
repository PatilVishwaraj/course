function isDiffK(arr, N, K) {
  let left = 0;
  let right = 1;
  while (right < N && left < N - 1) {
    if (arr[right] - arr[left] < K) {
      right++;
    } else if (arr[right] - arr[left] > K) {
      left++;
    } else {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
  return;
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2) {
    var [N, K] = input[i].trim().split(" ").map(Number);
    var arr = input[i + 1].trim().split(" ").map(Number);
    isDiffK(arr, N, K)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
