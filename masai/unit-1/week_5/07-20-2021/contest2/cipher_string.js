function cipher(n, string) {
    var count = 1
    var ans_str = ""
    for (let j = 0; j < n; j++) {
        if (string[j]==string[j+1]) {
            count++
        }
        else {
            ans_str += string[j] + count
            count = 1
        }
    }
    console.log(ans_str)
}

function runProgram(input) {
    var array = input.split("\n")
    var test = Number(array[0])
    for (let i = 1; i < array.length; i+=2) {
        cipher(Number(array[i]), array[i+1])
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2\n5\naabcc\n5\naazaa`);
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