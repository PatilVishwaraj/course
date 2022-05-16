// Famous String Interleaving Problem
function interleaveStr(str_A, str_B, str_C, N) {
  let i = 0
  let j = 0
  let k = 0
  while (k<N) {
    if (str_C[k]==str_A[i]) {
      i++
      k++
    } else if (str_C[k]==str_B[j]) {
      j++
      k++
    }else{
      return "No"
    }
  }
  return "Yes"
}
function runProgram(input) {
  input = input.trim().split("\n");
  let str_A = input[0].trim().split("")
  let str_B = input[1].trim().split("")
  let str_C = input[2].trim().split("")
  let L = str_A.length
  let M = str_B.length
  let N = str_C.length
  if (L+M==N) {
    console.log(interleaveStr(str_A, str_B, str_C, N))
  } else {
    console.log("No")
  }
}
// Ans No
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`A
  D
  AC`);
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
