var list=[1, 1, 2, 3, 4, 5, 1, 2],list1=[];
const rs=require("readline-sync");
var num=rs.questionInt("Enter your number which you want to remove:")
for (let i =0;i<list.length;i++){
    if (list[i]!=num){
        list1.push(list[i])
    }
}
console.log(list1)