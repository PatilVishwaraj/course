function getKey(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function runProgram(input) {
    var array = input.split("\n")
    var n = Number(array[0])
    var series = array[1].split(" ").map(Number)
    var bag = {}
    for (let i = 0; i < n; i++) {
      if (bag[series[i]]) {
          bag[series[i]]++
      }
      else {
          bag[series[i]]= 1
      }
    }
    var ans = 0
    for (const key in bag) {
      if (bag[key]>ans) {
        ans = bag[key]
      }
    }
    console.log(getKey(bag,ans))
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5\n0 2 0 6 9`);
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