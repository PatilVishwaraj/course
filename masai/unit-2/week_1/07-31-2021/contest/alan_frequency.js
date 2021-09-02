function runProgram(input) {
    var array = input.split("\n")
    var n = Number(array[0])
    var string = array[1].trim().split('')
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    var counter = {}
    for (let i = 0; i < 26; i++) {
      counter[alphabets[i]]=0
    }
    for (let i = 0; i < n; i++) {
        counter[string[i]]++
    }
    var key_array = Object.keys(counter)
    var j = 0
    for (const key in counter) {
      if (counter[key]!==0) {
        console.log(key_array[j] + '-' + counter[key])
      }
      j++
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4
    aman`);
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