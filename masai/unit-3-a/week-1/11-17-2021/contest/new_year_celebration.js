function trying() {
  
}







function runProgram(input) {
    input = input.trim().split('\n')
    var tests = +input[0]
    for (let i = 1; i < tests; i++) {
     let [command, num] = input[i].trim().split(' ').map(Number)
      if (command==1) {
        
      } else if (command==2) {
        
      } else if (command==3) {
        
      } else if (command==4) {
        
      } else if (command==5) {
        
      }
    }
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding(`ascii`);
    let read = ``;
    process.stdin.on(`data`, function (input) {
      read += input;
    });
    process.stdin.on(`end`, function () {
      read = read.replace(/\n$/, ``);
      read = read.replace(/\n$/, ``);
      runProgram(read);
    });
    process.on(`SIGINT`, function () {
      read = read.replace(/\n$/, ``);
      runProgram(read);
      process.exit(0);
    });
  }
  