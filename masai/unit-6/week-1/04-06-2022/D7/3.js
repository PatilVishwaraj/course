// 
function check(arr_1, arr_2) {
  if (arr_1.length !== arr_2.length) return "False" ;
  let obj1 = {}
  let N = arr_1.length;
  for (let i = 0; i < N; i++) {
    if (obj1[arr_1[i]]) {
      obj1[arr_1[i]]++
    } else {
      obj1[arr_1[i]] = 1
    }
  }
  for (let i = 0; i < N; i++) {
    if (obj1[arr_2[i]]) {
      obj1[arr_2[i]]--
    } else {
      return "False"
    }
  }
  let res = "True"
  let arrx = Object.values(obj1)
  for (let j = 0; j < arrx.length; j++) {
    if (arrx[j]!==0) {
      res = "False"
    }
  }
  return res

}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let arr_1 = input[i].trim().split("");
    let arr_2 = input[i+1].trim().split("");
    // check(arr_1, arr_2)
    console.log(check(arr_1, arr_2))
  }
  
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  abcd
  dcab
  aa
  aaa`);
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
