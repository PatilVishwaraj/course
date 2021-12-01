function removeDuplicates(arr) {
   var letters_bag = {}
   arr.forEach(element => {
     if (element!==" ") {
      letters_bag[element]=0
     }
   });
   console.log(Object.keys(letters_bag).join(""))
}


function runProgram(input) {
    input = input.trim().split('')
    removeDuplicates(input)
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`my name is ankush`);
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
  