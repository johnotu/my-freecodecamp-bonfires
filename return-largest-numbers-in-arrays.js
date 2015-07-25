// Function returns the largest of four inputed arrays

function largestOfFour(arr) {
  var narr = [];
  var len = arr.length;
  for (i=0; i<len; i++) {
  	narr.push(Math.max.apply(null,arr[i]));
  }
  return narr;
}
