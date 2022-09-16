// two-sum
var twoSum = function (nums, target) {
  let N = nums.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
function runProgram(input) {
  input = input.trim().split('\n');
  let nums = input[0].trim().split(' ').map(Number);
  let target = +input[1];
  console.log(twoSum(nums, target));
}
// Ans [ 0, 1 ]
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2 7 11 15
              9`);
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
