function checkAnagram(string1, string2) {
    var array1 = string2.split("")
    for (i= 0; i<string1.length; i++) {
        for (j= 0; j<=array1.length; j++) {
            if (string1[i]==array1[j]) {
                array1.splice(j, 1)
                break
            }
        }
    }
    var count =array1.length
    for (k= 0; k<array1.length; k++) {
        if (array1[k]== " ") {
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

function runProgram(input) {
    var array = input.split("\n")
    var string1 = array[0]
    var string2 = array[1]
    checkAnagram(string1, string2)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`sachin tendulkar is sachin tendulkar\nsi sachin hsacin tendulkar tedulkad`);
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