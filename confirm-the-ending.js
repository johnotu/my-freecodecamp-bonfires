// Function confirms that a letter ends a string.

function end(str, target) {
  str = str.split(" ");
  if (str[str.length-1] === target || str[str.length-1].substr(str[str.length-1].length-1,1) === target) {
    	return true;
	}
  else {
	return false;
  }
}
