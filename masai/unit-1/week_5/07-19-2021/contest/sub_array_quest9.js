function subArray(n, series) {
    var count = 0
    for (i=0; i<n; i++) {
        for (j=i+1; j<=n; j++) {
            var sub_array =[]
            for (k=i; k<j; k++) {
                var arr = []
                arr.push(series[k])
                var sum_even = 0
                var sum_odd = 0
                for (l=0; l<arr.length; l++) {
                    var b = arr[l] % 2
                    if (b == 0) {
                        sum_even += arr[l]
                    }
                    else {
                        sum_odd += arr[l]
                    }
                }
                if (sum_odd>sum_even) {
                    count++
                }
            }
            console.log(sub_array)
        }
    }
}

function runProgram(input) {
    var array = input.split("\n")
    var t = Number(array[0])
    for (i=1; i<=t; i+=2) {
        var n = Number(array[i])
        var series = (array[i+1]).split(" ").map(Number)
        // console.log()
        subArray(n, series)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`1\n5\n1 2 3 4 5`);
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