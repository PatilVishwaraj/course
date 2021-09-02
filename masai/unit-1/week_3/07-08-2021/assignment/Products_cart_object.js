function runProgram(input) {
    var array = input.split("\n")
    var info = []
    for (let i = 0; i < array.length; i++) {
        var data = {}
        var x = array[i].split(" ")
        data.name=x[0]
        data.quantity=x[1]
        data.price=x[2]
        info.push(data)
    }
    var total_price =0
    for (let j = 0; j < info.length; j++) {
        total_price += info[j].quantity*info[j].price
        
    }
    console.log(total_price)
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`Rice 2 60\nDal 3 50\nSalt 1 20`);
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


