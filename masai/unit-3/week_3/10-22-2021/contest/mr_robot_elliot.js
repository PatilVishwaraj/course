function runProgram(input) {
    input = input.trim().split('\n').map(Number)
  
  }
  

// string a : given input
//i: 0
//j:a.length()-1
//ans : empty string
// function String solve(String a,int i,int j,String ans)
// {
//         if (i>j) return ans;
//         int mid = (i + j)/2;
//         ans = ans + a.charAt(mid) + solve(a,i,mid-1,ans) + solve(a,mid+1,j,ans);
//         return ans;
// }
// main()
// {
//     String str="abcdefghijk"    
//   String result=solve(str, 0, str.length()-1, " ")
//   print(result)
// }


  if (process.env.USERNAME === `Admin`) {
    runProgram(``);
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
  