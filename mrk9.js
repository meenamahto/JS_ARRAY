// // in while loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max=numbers[0],second_max=numbers[0];
// var i=0;
// while(i<numbers.length){
//     if (numbers[i]>max){
//         max=numbers[i];
//     }
//     if (numbers[i]>second_max){
//         if (numbers[i]!=max){
//             second_max=numbers[i];
//         }
//     }
//     i=i+1
// }
// console.log("first max=",max,"\nsecond_max=",second_max)

// // in for loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max=numbers[0],second_max=numbers[0];
// for (var i=0;i<numbers.length;i++){
//     if (numbers[i]>max){
//         max=numbers[i];
//     }
//     if (numbers[i]>second_max){
//         if (numbers[i]!=max){
//             second_max=numbers[i]
//         }
//     }
// }
// console.log("first_max=",max,"\nsecond_max",second_max)

// // in do while loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max=numbers[0],second_max=numbers[0],i=0;
// do{
//     if (numbers[i]>max){
//         max=numbers[i]
//     }
//     if (numbers[i]>second_max){
//         if (numbers[i]!=max){
//             second_max=numbers[i]
//         }
//     }
//     i++
// }while(i<numbers.length)
// console.log("first_max=",max,"\nsecond_max",second_max)

// // in for in loop:-

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max=numbers[0],second_max=numbers[0];
for (var i in numbers){
    if (numbers[i]>max){
        max=numbers[i];
    }
    if (numbers[i]>second_max){
        if (numbers[i]!=max){
            second_max=numbers[i]
        }
    }
}
console.log("first_max=",max,"\nsecond_max=",second_max)

