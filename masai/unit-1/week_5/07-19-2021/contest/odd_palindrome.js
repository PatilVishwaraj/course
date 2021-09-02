function checkPalindrome (arr) {
    var ans = ""
    for (var l=0; l<arr.length; l++) {
        ans = arr[l] + ans
    }
    console.log(ans)
    console.log(arr)
    if (ans==arr) {
        console.log("yes")
    } else {
        console.log("no")
    }

}

function runProgram(input) {
    var array = input.split("\n")
    var n = input[0]
    var series = (array[1]).split("")
    var ans_array = []
    for (i=1; i<n; i+=2) {
        ans_array.push(series[i])
    }
    checkPalindrome(ans_array.join(""))

  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`6\nabcdeb`);
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