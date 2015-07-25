// Function checks for Palindromes between two inputed strings.
// Implementation uses regular expression to remove special characters

function palindrome(str) {
  str = (str.replace(/[\. ,'-\/#!$%\^&\*;:{}=\-_`~()]/g,"")).toLowerCase();
  var rts = [];
  var istrt = str.length-1;
  for(i=istrt; i>=0; i--) {
  	rts.push(str[i]);
  }
  rts = rts.join("");
  return (str == rts);
}

