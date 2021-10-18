function runProgram(input) {
    var data = input;
    var flag=0; 
    var l =0;
    var r = data.length-1;

    while(l<r){
        if(data[l]==data[r]){
            flag=1;
            l++;
            r--; 
        }
        else{
            flag=0;
            break;
        }
    } 
        
    if(data.length>=1){
        return console.log("Yes")
    }

    if(flag==1){
        console.log('Yes');
    }
    else{
        console.log('No');
    }
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`12`);
} else {
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