function runProgram(input) {
    var lines = input.split("\n")
    var data = []
    for (i=0; i<lines.length; i++) {
        var item = lines[i].split(" ")
        var name = item[0]
        var age = Number(item[1])
        var user ={}
        user.name = name
        user.age = age
        data.push(user)
    }
    for (i=0; i< data.length; i++) {
      if (data[i].age>30) {
        console.log(data[i].name)
      }
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`Nrupul 32\nPrateek 30\nAman 26\nAnkur 34\nAlbert 28\nYogesh 44\nSidharth 22`);
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