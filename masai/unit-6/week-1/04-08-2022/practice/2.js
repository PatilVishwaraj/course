// First unique character
function findUnique(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }
  let letters = Object.keys(obj)
  let counts = Object.values(obj)
  for (let i = 0; i < counts.length; i++) {
    if (counts[i]==1) {
    return letters[i]
    }
  }
  return "Not Found"
}
function runProgram(input) {
  let arr = input.trim().split("");
  console.log(findUnique(arr))
  
}
// Ans e
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`racecars`);
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
