// Tile of Togetherness

function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  input.sort((a, b) => a - b)
  let [N, M] = input;
  let ans = -1
  let arr_M = []
  while (N<=M) {
    arr_M.push(M)
    let str = N.toString()
    let str2 = M.toString()
    let x = 0
    let y = 0
    for (let i = 0; i < str.length; i++) {
      x += +str[i]
    }
    for (let k = 0; k < str2.length; k++) {
      y += +str2[k]
    }
    N += +x
    for (let j = 0; j < arr_M.length; j++) {
      if (N>arr_M[j]) {
        arr_M.shift()
      } else {
        break
      }
    }
    console.log(N, M, arr_M)
    if (N==M) {
      ans = N
      console.log("1st")
      break
    }
    if (arr_M[0]==undefined) {
      console.log("2nd")
      break
    }
    M += +y

  }
  console.log(ans)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`32 56`);
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
