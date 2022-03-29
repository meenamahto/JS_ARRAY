// // in while loop:-

// const rs=require("readline-sync");
// var number=rs.question("Enter your number:");
// var i=0,final_num="";
// while(i<number.length){
//     final_num+=number[i]
//     let j=0;
//     while(j<number.length-(i+1)){
//         final_num+="0"
//         j++
//     }
//     if(i==number.length-1){
//         break
//     }else{
//         final_num+="+"
//     }
//     i++

// }
// console.log(final_num)


// // in do while loop:-

// const rs=require("readline-sync");
// var number=rs.question("Enter your number:");
// var i=0,final_num="";
// do{
//     final_num+=number[i]
//     let j=0;
//     if(i==number.length-1){
//         break
//     }
//     else{
//         do{
//             final_num+="0"
//             console.log(final_num)
//             j++
//         }while(j<number.length-(i+1))
//         final_num+="+"
//     }
//     i++
// }while(i<number.length)
// console.log(final_num)

//  // in for loop:-

const rs=require("readline-sync");
var number=rs.question("Enter your number:");
var final_num="";
for (let i=0;i< number.length;i++){
    final_num+=number[i]
    for (let j=0;j< number.length-(i+1);j++){
        final_num+="0"
    }
    if(i==number.length-1){
        break
    }else{
        final_num+="+"
    }
}
console.log(final_num)