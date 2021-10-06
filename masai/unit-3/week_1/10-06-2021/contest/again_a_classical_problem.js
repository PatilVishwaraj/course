function checkBalance(arr) {
    var ans = "balanced"
    let n = arr.length
    let can = {"(":0, ")":0, "[":0, "]":0, "{":0, "}":0 }
    for (let i = 0; i < n; i++) {
        can[arr[i]]++
    }
    var ans_arr = Object.values(can)
    if (ans_arr[0]!==ans_arr[1] || ans_arr[2]!==ans_arr[3] || ans_arr[4]!==ans_arr[5]) {
      ans = "not balanced"
    }
    console.log(ans)
}

function runProgram(input) {
    input = input.trim().split('\n')
    var tests = +input[0]
    for (let i = 1; i <= tests; i++) {
        var arr = input[i].trim().split('')
        checkBalance(arr)
    }
  
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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
  