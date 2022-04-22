function processData(input) {
  input = prepareInput(input);
  // console.log(input)
  
  // var totalDiff = 0;
  // var minDiff = 0;
  // var minIndex = 0;
  
  // for (var i = 1; i <= input[0][0]; i++) {
  //     totalDiff += input[i][0] - input[i][1];
  //     if (totalDiff < minDiff) {
  //         minDiff = totalDiff;
  //         minIndex = i;
  //     }
  // }
  
  // console.log(minIndex);
} 
console.log("hi");

function prepareInput(input) {
  input = input.split("\n").map(function(e){
      return e.split(" ").map(Number);
  });
  console.log(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});