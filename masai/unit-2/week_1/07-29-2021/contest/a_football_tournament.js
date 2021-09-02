function getKey(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function runProgram(input) {
    var array = input.split("\n")
    var n = Number(array[0])
    var scoreboard = []
    for (let i = 1; i <= n; i++) {
      if (scoreboard[array[i]]) {
          scoreboard[array[i]]++
      }
      else {
          scoreboard[array[i]]= 1
      }
    }
    var ans = 0
    for (const key in scoreboard) {
      if (scoreboard[key]>ans) {
        ans = scoreboard[key]
      }
    }
    console.log(getKey(scoreboard,ans))
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`10\nW\nW\nW\nW\nW\nD\nW\nD\nD\nW`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }