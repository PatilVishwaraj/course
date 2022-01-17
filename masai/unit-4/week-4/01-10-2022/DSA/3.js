// Two Strings & Permutation
function checkMatch(str1, str2) {
  let N = str1.length;
  let data = {};
  for (let i = 0; i < N; i++) {
    if (data[str1[i]]) {
      data[str1[i]]++;
    } else {
      data[str1[i]] = 1;
    }
  }
  for (let j = 0; j < N; j++) {
    data[str2[j]]--;
  }
  for (const key in data) {
    if (data[key] == 0) {
      delete data[key];
    }
  }
  if (Object.values(data).length == 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim().split("");
  let str2 = input[1].trim().split("");
  checkMatch(str1, str2);
  // console.log(str1, str2)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`amit
  mtia`);
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
