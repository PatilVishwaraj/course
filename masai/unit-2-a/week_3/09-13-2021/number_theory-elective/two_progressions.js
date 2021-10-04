function APGP(n, r) {
    sum = 1
    S(1-R)
    for (let j = 1; j <= n; j++) {
        sum += (1+((j-1)*r))*(r**(j-1))
        sum
    }
    var ans = sum % ((10**9)+7)
    console.log(ans)
} 
function runProgram(input) {
    input = input.trim().split('\n')
    var test = +input[0]
    for (let i = 1; i <= test; i++) {
        var [n, r] = input[i].trim().split(' ').map(Number)
        APGP(n, r)
    }
}
if (process.env.USERNAME === `PC`) {
  runProgram(`10
  76649417132192 374667
  59742775575410 156963
  91133193261077 854160
  62985397632010 233049
  25737654462905 18893
  85458230719284 484583
  38365342714134 671727
  97428667664523 860588
  249735299744 275110
  97220555817192 322293`);
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
// 