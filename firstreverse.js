"use-strict";

function FirstReverse(str) { 
  var str2 = str.split("");
  str2.reverse();
  str = str2;
  str = str.toString();
  str = str.trim(' ');
  str = str.replace(/,/g, '')
  return str; 
}
   
// keep this function call here 
console.log(FirstReverse(readline()));
