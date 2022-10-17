// Anagram Detector!
function checkAnagram(str1, str2, N1, N2) {
  let obj = {}
  for (let i = 0; i < N1; i++) {
    if (str1[i] !== " ") {
      if (obj[str1[i]]) {
        obj[str1[i]]++
      } else {
        obj[str1[i]]=1
      }
    }
  }
  for (let j = 0; j < N2; j++) {
    if (str2[j] !== " ") {
      if (obj[str2[j]]) {
        obj[str2[j]]--
      } else {
        return "False"
      }
    }
  }
  for (const key in obj) {
    if (obj[key]!==0) {
      return "False"
    }
  }
  return "True"
}
function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim().split("");
  let N1 = str1.length
  let str2 = input[1].trim().split("");
  let N2 = str2.length
  console.log(checkAnagram(str1, str2, N1, N2))
  
}
// Ans True
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`anagram
  nag a ram`);
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