function first_big(n, series, target) {
  var ans = -1
  for (let j = 0; j < n; j++) {
    if (ans == -1) {
      if (series[j]>target) {
        ans = series[j]
        
      }
    }
    else {
      if (series[j]>target && series[j]<ans) {
        ans = series[j]
      }
    }
  }
  console.log(ans)
}

function runProgram(input) {
    var arr = input.split("\n")
    var n = Number(arr[0])
    var series = arr[1].split(" ").map(Number)
    var test = Number(arr[2])
    for (i=0; i<test; i++) {
      var target =arr[3+i]
      first_big(n, series, target)
    }
}

if (process.env.USERNAME === 'PC') {
  runProgram(`10\n13 89 81 66 81 63 71 76 73 81\n2\n65\n15`);
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