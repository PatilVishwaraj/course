// function getKey(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }
//   const map = {"first" : "1", "second" : "2"};
//   console.log(getKey(map,"2"));
// obj = {a: 1, b: 1, c: 1}
// console.log(obj.length)







function fastpow(a, b, m) {
	if(b == 1) {
		return a;
  } else if(b % 2){ // is odd
  	return (a * fastpow(a, b - 1, m)) % m
  } else{
  	return fastpow((a * a) % m, b / 2, m);
  }
}

console.log(fastpow(263, 10000001, (1000000000+7)));



// 263 10000001
// Expected Output
// 892715222
// Output
// 172874702