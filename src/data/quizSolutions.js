/** --- solutions --- **/

let solutions = {};

solutions.sumDownBy2 = function (n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
      return 1;
    }
    else {
      return n + this.sumDownBy2(n-2);
    }
 }
 
 
solutions.makes8 = function (a, b) {
  return ((a == 8 || b == 8) || (a + b == 8));
};
 
solutions.countOdds = function (nums) {
   let count = 0;
 
     for (let i = 0; i < nums.length; i++){
         if (nums[i]%2 === 1){
             count += 1;
         }
     }
     return count;
 }
 
 solutions.fib = function (n) {
   if (n < 2) {
       return n;
   };
     return this.fib(n-1) + this.fib(n-2);
 }
 solutions.fibScrabmble = function (str) {
  var result = "";
  var fib = new Array(str.length+1).fill(1);
  for(var i=2;i<fib.length;i++){
    fib[i]=fib[i-1]+fib[i-2];
  }
  var chars = str.split("");
  for(var i=0;i<str.length;i++){
    var fibnum = fib[str.length-1-i];
    var idx = fibnum%str.length;
    var char = "";
    while(char===""){
      char=chars[idx];
      if(char===""){
      idx = (str.length +idx -1)%str.length;
      }
    }
    chars[idx]="";
    result += char;
  }
     return result;
 }

 module.exports = solutions;