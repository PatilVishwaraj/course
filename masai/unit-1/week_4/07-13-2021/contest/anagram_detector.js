function runProgram(input) {
    var array = input.split("\n")
    var string = array[1].split('')
    for (let i = 0; i < array[0].length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (array[0][i]==string[j]) {
                string.splice(j, 1)
                break
            } 
        }
    }
    var count = string.length
    for (let i = 0; i < string.length; i++) {
        if (string[i]==' ') {
            count--
        }
    }
    if (count==0) {
        console.log("True")
    }
    else {
        console.log("False")
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`anagram\nnag a ram`);
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