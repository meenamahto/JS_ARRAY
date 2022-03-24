// // in while loop:-

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var i=0,even_sum=0,odd_sum=0;
// while(i<elements.length){
//     if(elements[i]%2==0){
//         even_sum+=elements[i]
//     }
//     else{
//         odd_sum+=elements[i]
//     }
//     i++
// }console.log("sum of even=",even_sum,"\nsum of odd=",odd_sum)

// // in do while loop:-

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var i=0,even_sum=0,odd_sum=0;
// do{
//     if(elements[i]%2==0){
//         even_sum+=elements[i]
//     }
//     else{
//         odd_sum+=elements[i]
//     }
//     i++
// }while(i<elements.length);
// console.log("sum of even=",even_sum,"\nsum of odd=",odd_sum)

// //in for loop:-


// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var even_sum=0,odd_sum=0;
// for (let i=0;i<elements.length;i++){
//     if(elements[i]%2==0){
//         even_sum+=elements[i]
//     }
//     else{
//         odd_sum+=elements[i]
//     }
// }console.log("sum of even=",even_sum,"\nsum of odd=",odd_sum)

// // in for in loop:-

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var even_sum=0,odd_sum=0;
// for (let i in elements){
//     if(elements[i]%2==0){
//         even_sum+=elements[i]
//     }else{
//         odd_sum+=elements[i]
//     }
// }console.log("sum of even=",even_sum,"\nsum of odd=",odd_sum)

// // in for of loop:-

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var even_sum=0,odd_sum=0;
for (let i of elements){
    if(i%2==0){
        even_sum+=i
    }else{
        odd_sum+=i
    }
}console.log("sum of even=",even_sum,"\nsum of odd=",odd_sum)