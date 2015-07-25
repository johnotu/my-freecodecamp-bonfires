// Code returns the reverse of inputed string

function reverseString(str) {
    var arr = [];
    for(i=str.length-1;i>=0;i--){
        arr.push(str[i]);
    }
    return arr.join('');
}