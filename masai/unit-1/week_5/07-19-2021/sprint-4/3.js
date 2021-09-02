function reverseWords(string) {
    var array1 = string.split(" ")
    var ans_array = []
    for (j=0; j<array1.length; j++) {
        var str  = array1[j]
        var word = ""
        for (k=0; k<str.length; k++) {
            word = str[k] + word
        }
        ans_array.push(word)
    }
    console.log(ans_array.join(" "))
}

function runProgram(input) {
    var array = input.split("\n")
    var n = array[0]
    for (i=1; i<=n; i++) {
        reverseWords(array[i])
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3\nhi there\nhello  world\na  b\n`);
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