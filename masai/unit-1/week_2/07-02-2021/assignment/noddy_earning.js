function earning(num,income,heights) {
  var count = 1
  var stand = heights[0]
  for (i=1; i<num; i++) {
    if (heights[i]>stand) {
      count++
      stand = heights[i]
    }
  }
  return (count*income)
  
}

function runProgram(input) {
    var array = input.split("\n")
    var tests = array[0]
    for (j=1; j<=(2*tests); j+=2) {
      var details  = array[j].split(" ").map(Number)
      var num = details[0]              //number of buildings
      var income = details[1]              //income
      var heights = array[1+j].split(" ").map(Number)    //heights of building
       console.log(earning(num,income,heights))
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2\n6 3\n8 2 3 11 11 10\n5 12\n12 20 39 45 89`);
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