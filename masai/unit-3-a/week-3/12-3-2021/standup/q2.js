function runProgram(input) {
  input = input.split("\n");
  let len = +input[0];
  let line = 0;
  const distanceLeft = [];
  for (let i = len; i >= 1; i--) {
    let [drink, distance] = input[i].split(" ").map(Number); // 5 1
    if (i == len) {
      if (distance * 2 > drink) {
        // 8 > 3
        distanceLeft.push(distance * 2 - drink); // 5
      } else {
        distanceLeft.push(0);
      }
    } else {
      if (distanceLeft[distanceLeft.length - 1] + distance > drink) {
        // 5 > 1
        distanceLeft.push(
          distanceLeft[distanceLeft.length - 1] + distance - drink
        ); // 4
      } else {
        distanceLeft.push(0);
      }
    }
  }

  distanceLeft.reverse();
  let ans = -1;
  for (let i = 0; i < distanceLeft.length; i++) {
    if (distanceLeft[i] == 0) {
      ans = i;
      break;
    }
  }
  console.log(ans);
}
runProgram(`3
1 5
10 3
3 4`);
