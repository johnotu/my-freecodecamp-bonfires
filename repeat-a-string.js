// Function repeats inputed string for a number of times

function repeat(str, num) {
    var strArr=[];
  if(num<0){
      return "";
  }
  else {
      for(i=0;i<num;i++){
          strArr.push(str);
      }
      return strArr.join("");
  }
  
}
