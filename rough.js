var arr1 = [1, 3, 8, 9];
var arr2 = [2, 4, 5, 6, 7];
function sortMerge(arr1, arr2) {
  let a = 0;
  let b = 0;
  let N1 = arr1.length;
  let N2 = arr2.length;
  let Ans = [];
  while (a < N1 || b < N2) {
    if (a == N1 && b < N2) {
      Ans.push(arr2[b]);
      b++;
    } else if (b == N2 && a < N1) {
      Ans.push(arr1[a]);
      a++;
    } else if (arr1[a] < arr2[b]) {
      Ans.push(arr1[a]);
      a++;
    } else if (arr2[b] < arr1[a]) {
      Ans.push(arr2[b]);
      b++;
    }
  }
  console.log(Ans);
}
sortMerge(arr1, arr2);
