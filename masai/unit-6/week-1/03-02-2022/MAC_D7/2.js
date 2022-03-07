// Pasha and Shasha and valid anagram
function checkAnagram(str1,str2) {
  let N = str1.length
  let M = str2.length
  if (M!==N) {
    return "False"
  } else {
    let obj = {}
    for (let i = 0; i < N; i++) {
      if (obj[str1[i]]) {
        obj[str1[i]]++
      } else {
        obj[str1[i]]=1
      }
    }
    for (let i = 0; i < M; i++) {
      if (obj[str2[i]]) {
        obj[str2[i]]--
      } else {
        return "False"
      }
    }
    let arr = Object.values(obj)
    arr.forEach(el => {
      if (el!==0) {
        return "False"
      }
    });
    return "True"
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0]
  for (let i = 1; i < test*2; i+=2) {
    let str1 = input[i]
    let str2 = input[i+1]
    console.log(checkAnagram(str1,str2))
  }
}
// Ans  False
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  iuuyyxjjxb
  nhurlyuzmo`);
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
