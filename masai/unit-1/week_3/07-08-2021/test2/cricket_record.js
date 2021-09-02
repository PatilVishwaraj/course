function runProgram(input) {
    var arr = input.split(" ")
    var high = arr[0], sachin = arr[1]

    if (sachin>high){
        console.log("Broken")}
    if (sachin<high){
        console.log("Not Yet")}
    else{
        console.log("Wao")}
    
  
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