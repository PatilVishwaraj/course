function runProgram(input) {
    var array = input.split("\n")
    var object1 = {}
    for (let i = 0; i < array.length; i++) {
        var x = array[i].split(" ")
        object1[x[0]]=[]
    }
    for (let j = 0; j < array.length; j++) {
        var x = array[j].split(" ")
        object1[x[0]].push(x[1])
    }
    console.log(object1)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`Nrupul cmd\nPrateek js\nAman ds\nNrupul python\nAlbert js\nAlbert react\nAman algo\nPrateek html\nNrupul sql`);
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