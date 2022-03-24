// //in for loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max=numbers[0];
// for (let i=0;i<numbers.length;i++){
//     if (numbers[i]>max){
//         max=numbers[i];
//     }
// }
// console.log(max)

// // in while loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var i=0,max=numbers[0];
// while(i<numbers.length){
//     if (numbers[i]>max){
//         max=numbers[i];
//     }
//     i++
// }console.log(max)

// // in do while loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var i=0,max=numbers[0];
// do{
//     if (numbers[i]>max){
//         max=numbers[i];
//     }
//     i++
// }while(i<numbers.length)
// console.log(max)


// //in for in loop:-

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max=numbers[0];
for (let i in numbers){
    if (numbers[i]>max){
        max=numbers[i]
    }
}console.log(max)

