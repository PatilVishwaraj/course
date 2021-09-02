function runProgram(input) {
    var array = input.split("\n")
    var n = Number(array[0])
    var series = (array[1]).split(" ").map(Number)
    var total_diff = 0
    for (i=0; i<n; i++) {
        for (j=n-1; j>i; j--) {
            var x = j-i
            var count=0
            for (var k=2; k<x; k++) {
                if ((x%k)==0) {
                    count++
                }
            }
            if(x!==1 && count==0) {
                var diff = 0
                if (series[j]>series[i]) {
                    diff = series[j]-series[i]
                }
                else{
                    diff = series[i]-series[j]
                }
                total_diff+= diff
            }
        }
    }
    console.log(total_diff)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`6\n1 2 3 5 7 12`);
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