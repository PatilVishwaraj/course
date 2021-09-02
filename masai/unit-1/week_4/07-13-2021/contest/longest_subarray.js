function longestSubarray (n, array) {
  var ans = []
    for (start=0; start < n; start++) {
        for (end=start+1; end <= n; end++) {
            var sub =[]
            for (k=start; k<end; k++) {
              if (sub.length == 0 || array[k]>sub[sub.length-1]) {
                sub.push(array[k])
              }
              else{break}
            }
            if (ans.length<sub.length) {
              ans = sub
            }
        }
    }
    console.log(ans.length)
}

function runProgram(input) {
    var array1 = input.split("\n")
    for (i=1; i<array1.length; i+=2) {
        longestSubarray(Number(array1[i]), array1[i+1].split(" ").map(Number))
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2\n2\n1 1\n6\n1 2 1 2 3 1`);
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