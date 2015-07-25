// Function returns a string with each word title-cased.
// uses regular expression in implementation

function titleCase(str) {
	return str.replace(/\w\S*/g, function(nstr) {
    	return nstr.charAt(0).toUpperCase() + nstr.substr(1).toLowerCase();
    	}
	);
}
