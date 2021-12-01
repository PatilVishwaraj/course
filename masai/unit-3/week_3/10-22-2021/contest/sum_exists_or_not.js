function subSet(arr, sum, curr) {
  if (sum == 0) {
    console.log(sum.join(""));
  } else if (curr == arr.length) {
    return;
  }
  for (let i = curr; i < arr.length; i++) {
    sum.push(arr[i]);
    subSet(arr, sum, i + 1);
    sum.pop();
  }
}


function runProgram(input) {
  input = input.trim().split("\n");
  var k = +input[2];
  var arr = input[1].trim().split(" ").map(Number);
  subSet(arr, ans, curr)
  if (flag) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
