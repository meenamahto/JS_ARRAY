const rs=require("readline-sync");
var n=rs.questionInt("Enter your number:");
let num="";
while(n>0){
    rem=n%10
    squ=rem**2
    num+=squ
    n=Math.floor(n/10)
}
console.log(num)
