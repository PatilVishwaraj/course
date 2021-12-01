function masaiEnqueue( team, num) {
  let person = [team, num]
  while (condition) {
    
  }
  queue.push(person)
}

function masaiDqueue() {
  let show = queue.shift()
  console.log(show.join(' '))
}

var queue = []
function runProgram(input) {
  input = input.trim().split("\n");
  var Quantity = +input[0];
  for (let i = 1; i <= Quantity; i++) {
    let [command, team, num] = input[i].trim().split(" ");
    // console.log(command, team, num);s
    if (command == "E") {
      masaiEnqueue( +team, +num)
    } else if (command == "D") {
      masaiDqueue()
    }
    console.log(queue)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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
