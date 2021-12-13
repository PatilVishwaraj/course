function merge(N, arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < N && j < N) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }
  while (i < N) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < N) {
    ans.push(arr2[j]);
    j++;
  }
  return ans.join(" ");
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);
  console.log(merge(N, arr1, arr2));
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
    1 5 7 9
    2 4 6 8`);
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
