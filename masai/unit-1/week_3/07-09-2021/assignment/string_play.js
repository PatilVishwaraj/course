function cleanString(lc) {
  lc = lc.split("")
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
  var lowerCase = "abcdefghijklmnopqrstuvwxyz "
    for (i1=0;i1<lc.length; i1++) {
      for (j1=0;j1<27; j1++) {
        if (lc[i1]==upperCase[j1]) {
        lc[i1]=lowerCase[j1]
      }
    }
  }
  lc = lc.join("")
  return lc
}

function camelCase(str) {
  str = str.split("")
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
  var lowerCase = "abcdefghijklmnopqrstuvwxyz "
  
  str = str.join("")

  cc = str.split(" ")
  cc = cc.join("")
  return cc
}

function snakeCase(sc) {
  sc = sc.split(" ")
  sc = sc.join("_")
  return sc
}

function hypenCase(hc) {
  hc = hc.split(" ")
  hc = hc.join("-")
  return hc
}

function runProgram(input) {
  var string = input
  string = cleanString(string)
  console.log(string)
  var camel_string = camelCase(string)
  console.log(snakeCase(string))
  console.log(hypenCase(string))


  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`Early Monday     morning   MUSIC`);
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