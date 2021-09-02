function detectPalindrome(n, string) {
    var collect = {}
    for (let i = 0; i < n; i++) {
        if (collect[string[i]]) {
            collect[string[i]]++
        }
        else {
            collect[string[i]]= 1
        }
    }
    var count = 0
    for (const key in collect) {
        if (collect[key]%2!==0) {
            count++
        }
    }
    if (count<2) {
        console.log('Possible!')
    }
    else {
        console.log('Not Possible!')
    }
}

function runProgram(input) {
    var input = input.split("\n")
    for (let i = 1; i < input.length; i+=2) {
        detectPalindrome(Number(input[i]), input[i+1].trim())
    }  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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