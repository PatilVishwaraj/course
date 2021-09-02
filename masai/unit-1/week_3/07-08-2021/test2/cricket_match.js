function runProgram(input) {
    var arr = input.split("\n")
    var t1 = (arr[0]).trim().split(" ")  //new_zealand
    var t2 = (arr[1]).trim().split(" ")  //england
    if (Number(t1[0])==Number(t2[0])){
        if (Number(t1[1])==Number(t2[1]))
            {if (Number(t1[2])>Number(t2[2])){
            console.log("New Zealand")
            } else if (Number(t1[2])<Number(t2[2])){
            console.log("England")
            }
        } else if (Number(t1[1])>Number(t2[1])){
            console.log("New Zealand")
        } else if (Number(t1[1])<Number(t2[1])){
            console.log("England")
        }
    } else if (Number(t1[0])>Number(t2[0])){
        console.log("New Zealand")
    } else if (Number(t1[0])<Number(t2[0])){
        console.log("England")
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(``);
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