function runProgram(input) {
    var array = input.split("\n")
    var object = {
        data: [],
        addData: function (user, num) {
            var row = {name:user,phone:num}
            this.data.push(row)
        },
        findNumber: function (user) {
            for (let i = 0; i < this.data.length; i++) {
                var name = this.data[i].name;
                if (name==user) {
                    var number = Number(this.data[i].phone)
                    console.log(number)
                    break
                }
            }
            if (name!==user) {
                console.log("user not found")

            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        var string = array[i].split(" ")
        object.addData(string[0],string[1])
    }
    object.findNumber("Rohith")
    
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`Ajay 21345\nRamDas 32146\nRohith 23522\nNihal 98743`);
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