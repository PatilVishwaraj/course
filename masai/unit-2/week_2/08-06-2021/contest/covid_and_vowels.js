function runProgram(input) {
    var input = input.trim().split("")
    var covid_vowels = ['a', 'i', 'o', 'u']
    var ans = 0
    for (let start = 0; start < input.length; start++) {
        for (let end=start+3; end< input.length; end++) {
            var sub_str = {}
            for (let i = start; i <= end; i++) {
                sub_str[input[i]]=1

            }
            if (sub_str['a'] && sub_str['i'] && sub_str['o'] && sub_str['u']) {
                ans++
            }
        }
    }
    console.log(ans)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`dangerouscovid`);
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