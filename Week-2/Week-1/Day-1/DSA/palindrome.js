
function palindrome(str){
    var l =0
    var r = str.length-1;
    while(l<r){
        if(str[l]!=str[r]){
            return false;
        }
        l++;
        r--;
    } 
    return true;
}

function runProgram(input) {

    var data = input;
  var check = palindrome(data);
  if(check==true){
      console.log('Yes');
  }
  else{
      console.log('No');
  }
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`mom`)} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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