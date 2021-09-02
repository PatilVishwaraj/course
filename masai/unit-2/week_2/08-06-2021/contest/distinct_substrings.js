function distinctString(n, str) {
    var obj = {}
    for (start=0; start<n; start++) {
        for (end=start+1; end<=n; end++) {
            var sub_str = ''
            for (i=start; i<end; i++) {
                sub_str += str[i]
            }
            obj[sub_str]=1
        }
    }
    var ans = 0
    for (const key in obj) {
        ans += obj[key]
    }
    console.log(ans)
}

function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 1; i < input.length; i+=2) {
        var n = Number(input[i])
        var str = input[i+1].trim()
        distinctString(n, str)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2
    5
    abcde
    3
    aaa`);
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