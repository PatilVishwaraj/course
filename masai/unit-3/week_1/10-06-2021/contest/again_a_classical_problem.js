function checkBalance(arr, n, stack) {

  var top = -1;
  var result = "balanced";
  for (let i = 0; i < n; i++) {
    // console.log(stack)
    if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") {
      stack.push(arr[i]);
      top++;
    } else {
      if (top < 0) {
        result = "not balanced";
        break;
      } 
  else {
        if (
          (arr[i] == ")" && stack[top] == "(") ||
          (arr[i] == "}" && stack[top] == "{") ||
          (arr[i] == "]" && stack[top] == "[")
        ) {
          stack.pop();
          top--;
        } else {
          result = "not balanced";
          break;
        }
      }
  }
  }
  if (top!= -1) {
    result = "not balanced";
  }
  console.log(result);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var tests = +input[0];
  for (let i = 1; i <= tests; i++) {
    var arr = input[i].trim().split("");
    var n = arr.length
    checkBalance(arr, n, []);
  }
}

if (process.env.USERNAME === `Admin`) {
  runProgram(`3
  {([])}
  ()
  ([]`);
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
