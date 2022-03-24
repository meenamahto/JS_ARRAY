// // in while loop:-

// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var sum_of_even=0,sum_of_odd=0,i=0,count=0,count1=0;
// while(i<elements.length){
//     if(elements[i]%2==0){
//         sum_of_even+=elements[i]
//         count++
//     }
//     else{
//         sum_of_odd+=elements[i]
//         count1++
//     }
//     i++
// }
// console.log("average of even=",sum_of_even/count,"\naverage of odd=",sum_of_odd/count1)
// console.log("sum of even=",sum_of_even,"\nsum of odd=",sum_of_odd)
// console.log("count of even=",count,"\ncount of odd=",count1)

// // in do while loop:-

// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var sum_of_even=0,sum_of_odd=0,i=0,count=0,count1=0;
// do{
//     if(elements[i]%2==0){
//         sum_of_even+=elements[i]
//         count++
//     }
//     else{
//         sum_of_odd+=elements[i]
//         count1++
//     }
//     i++
// }while(i<elements.length)
// console.log("average of even=",sum_of_even/count,"\naverage of odd=",sum_of_odd/count1)
// console.log("sum of even=",sum_of_even,"\nsum of odd=",sum_of_odd)
// console.log("count of even=",count,"\ncount of odd=",count1)

// // in for loop:-

// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var sum_of_even=0,sum_of_odd=0,count=0,count1=0;
// for (let i=0;i<elements.length;i++){
//     if(elements[i]%2==0){
//         sum_of_even+=elements[i]
//         count++
//     }
//     else{
//         sum_of_odd+=elements[i]
//         count1++
//     }
// // }console.log("average of even=",sum_of_even/count,"\naverage of odd=",sum_of_odd/count1)
// console.log("sum of even=",sum_of_even,"\nsum of odd=",sum_of_odd)
// console.log("count of even=",count,"\ncount of odd=",count1)

// // in for in loop:-

// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var sum_of_even=0,sum_of_odd=0,count=0,count1=0;
// for (let i in elements){
//     if(elements[i]%2==0){
//         sum_of_even+=elements[i]
//         count++
//     }
//     else{
//         sum_of_odd+=elements[i]
//         count1++
//     }
// }console.log("average of even=",sum_of_even/count,"\naverage of odd=",sum_of_odd/count1)
// console.log("sum of even=",sum_of_even,"\nsum of odd=",sum_of_odd)
// console.log("count of even=",count,"\ncount of odd=",count1)

// // in for of loop:-

elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_of_even=0,sum_of_odd=0,count=0,count1=0;
for (let i of elements){
    if(i%2==0){
        sum_of_even+=i
        count++
    }
    else{
        sum_of_odd+=i
        count1++
    }
}console.log("average of even=",sum_of_even/count,"\naverage of odd=",sum_of_odd/count1)
console.log("sum of even=",sum_of_even,"\nsum of odd=",sum_of_odd)
console.log("count of even=",count,"\ncount of odd=",count1)