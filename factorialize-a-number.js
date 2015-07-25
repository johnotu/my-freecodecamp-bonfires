// This function returns the factorial (!) of a number.

function factorialize(num) {
	for (i=num-1; i>1; i--) {
    	num = num*i;
	}
  return num;
}