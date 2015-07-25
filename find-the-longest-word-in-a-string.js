// Function finds the longest word in a sentence

function findLongestWord(str) {
	str = str.split(" ");
	var len = str.length;
	var newAr = [];
	for (i=0; i<len; i++) {
    	newAr.push(str[i].length);
	}
	str = Math.max.apply(null, newAr);
   
	return str;
}
