function runProgram(input) {
  var ans = "Unique"
  var bag = {}
  for (let i = 0; i < input.length; i++) {
    if (bag[input[i]]) {
      bag[input[i]]++
    } else {
      bag[input[i]] = 1
    }
  }
  arr2 = Object.values(bag)
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j]>1) {
      ans = "No"
      break
    }
  }
  console.log(ans)
}

if (process.env.USERNAME === `PC`) {
  runProgram(`masai`);
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