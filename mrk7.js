// // in for in loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var count=0
// for(var i in numbers){
//     count++
// }
// console.log(count)

// // for of loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var count=0
// for (let i of numbers){
//     count++
// }
// console.log(count)

// // in for loop:-

numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var count_element=0;
var len=numbers.length;
for(var i=0;i<len;i++){
    count_element++
}
console.log(count_element);