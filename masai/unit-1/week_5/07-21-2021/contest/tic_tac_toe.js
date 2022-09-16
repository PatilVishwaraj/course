function winCheck(matrix) {
  for (let r = 0; r < 3; r++) {
    if (matrix[r][0] == matrix[r][1] && matrix[r][1] == matrix[r][2]) {
      console.log(matrix[r][0]);
      return;
    } else if (matrix[0][r] == matrix[1][r] && matrix[1][r] == matrix[2][r]) {
      console.log(matrix[0][r]);
      return;
    }
  }
  if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
    console.log(matrix[0][0]);
    return;
  } else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
    console.log(matrix[0][2]);
    return;
  }
  console.log('tie');
}

function runProgram(input) {
  var array = input.split('\n');
  var tic_tac = [];
  for (let i = 0; i < 3; i++) {
    tic_tac.push(array[i].split(' '));
  }
  winCheck(tic_tac);
}

if (process.env.USERNAME === 'PC') {
  runProgram(`x o o\no o x\no x x`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
