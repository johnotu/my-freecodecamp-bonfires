//Function displays inputed number of characters of a string and "..."

function truncate(str, num) {
  if(str.length>num){
      return str.slice(0,num-3)+"...";
  }
  else {return str;}
}
