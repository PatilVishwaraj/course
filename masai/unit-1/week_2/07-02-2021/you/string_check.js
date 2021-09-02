function checkAlpha (n, string) {
    var char = "abcdefghijklmnopqrstuvwxyz "
    var ans = false
    for (j=0; j<n; j++) {
        for (k=0; k<28; k++) {
            if (string[j]==char[k]) {
                ans = true
            }
        }
    }
    return ans
}

function checkNum (n, string) {
    var num = "0123456789 "
    var ans = false
    for (j=0; j<n; j++) {
        for (k=0; k<11; k++) {
            if (string[j]==num[k]) {
                ans = true
            }
        }
    }
    return ans
}

function runProgram(input) {
    var array = input.split("\n")
    var tests = Number(array[0])
    for (i=1; i<(2*tests); i+=2) {
        var n = array[i] , string = (array[1+i]).split("")
        var alpha = checkAlpha(n, string)
        var num = checkNum (n, string)
    if (alpha && num) {
        console.log("alphanumeric")
    }
    else {
        if (alpha) {
            console.log("chars")
        }
        if (num) {
            console.log("numbers")
        }

    }
    }

  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3\n5\nab2cd\n5\nacfgh\n3\n123`);
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