var N = 6;
var string = aabbcc;
var tally = {};
for (let i = 0; i < N; i++) {
  if (tally[string[i]]) {
    tally[string[i]]++;
  } else {
    tally[string[i]] = 1;
  }
}
var count = 0;
for (const key in tally) {
  if (tally[key] % 2 !== 0) {
    count++;
  }
}

if (count < 2) {
  console.log("Possible!");
} else {
  console.log("Not Possible!");
}
