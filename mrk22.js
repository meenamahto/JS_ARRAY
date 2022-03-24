// // in for in loop:-

// var mainStr = "the quick brown fox jumped over the lazy dog . the dog slept over the verandah."
// var subStr = "over"
// var list=mainStr.split(" ")
// const rs=require("readline-sync");
// var word=rs.question("Enter your number:")
// for(var i in list){
//     if(list[i]==word){
//         list.splice(i,1)
//     }
// }
// var mainStr=list.join(" ")
// console.log(mainStr)

// // in for loop:-

// var mainStr = "the quick brown fox jumped over the lazy dog . the dog slept over the verandah."
// var subStr = "over"
// var list=mainStr.split(" ")
// const rs=require("readline-sync");
// var word=rs.question("Enter your number:")
// for(var i=0; i< list.length;i++){
//     if(list[i]==word){
//         list.splice(i,1)
//     }
// }
// var mainStr=list.join(" ")
// console.log(mainStr)

// // in for of loop:-

// var mainStr = "the quick brown fox jumped over the lazy dog . the dog slept over the verandah."
// var subStr = "over"
// var list=mainStr.split(" ")
// const rs=require("readline-sync");
// var word=rs.question("Enter your number:")
// for(var i of list){
//     if(i==word){
//         list.splice(list.indexOf(i),1)
//     }
// }
// var mainStr=list.join(" ")
// console.log(mainStr)


// // in while loop:-

// var mainStr = "the quick brown fox jumped over the lazy dog . the dog slept over the verandah.";
// var subStr = "over";
// var array=mainStr.split(" ")
// const rs=require("readline-sync");
// var word=rs.question("Enter your word:");
// var i=0;
// while(i<array.length){
//     if(array[i]==word){
//         array.splice(i,1)
//     }
//     i++
// }
// var mainStr=array.join(" ");
// console.log(mainStr)

// // in do while loop:-

var mainStr = "the quick brown fox jumped over the lazy dog . the dog slept over the verandah.";
var subStr = "over";
var array=mainStr.split(" ");
const rs= require("readline-sync");
var word=rs.question("Enter your word:");
var i=0;
do{
    if(array[i]==word){
        array.splice(i,1)
    }
    i++
}while(i<array.length)
var mainStr=array.join(" ")
console.log(mainStr)

