// // in for loop:-

// var names=['m','a','l','a','y','a','l','a','m'];
// var new_list=[]
// for (let i=names.length-1;i>=0;i--){
//     new_list.push(names[i])
// }
// var count=0
// console.log(new_list)
// for (let j in new_list){
//     if (names[j]==new_list[j]){
//         count++
//     }
// }
// if(count==names.length){
//     console.log("it is a palindrome")
// }
// else{
//     console.log("it is not a palindrome")
// }

// // in while loop:-

// var names=['m','a','l','a','y','a','l','a','m'];
// var new_list=[],i=names.length-1;
// while(i>=0){
//     new_list.push(names[i])
//     i--
// }
// var count=0,j=0;
// while(j<new_list.length){
//     if (new_list[j]==names[j]){
//         count++
//     }
//     j=j+1
// }
// if(count==names.length){
//     console.log("it is a palindrome")
// }
// else{
//     console.log("it is not a palindrome")
// }

// // in do while loop:-

// var names=['m','a','l','a','y','a','l','a','m'];
const rs=require("readline-sync");
var string=rs.question("Enter your string or number:");
var names=string.split("")
var new_list=[],i=names.length-1;
do{
    new_list.push(names[i])
    i--
}while(i>=0);
var count=0,j=0;
do{
    if (new_list[j]==names[j]){
        count++
    }
    j++
}while(j<new_list.length);
if(count==names.length){
    console.log("it is a palindrome")
}else{
    console.log("it is not a palindrome")
}