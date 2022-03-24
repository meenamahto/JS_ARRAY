// // in while loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var i=numbers.length-1
// var final_list=[]
// while(i>=0){
//     final_list.push(numbers[i])
//     i--
// }console.log(final_list)

// //in do while loop:-

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var i=numbers.length-1,final_list=[];
// do{
//     final_list.push(numbers[i])
//     i--
// }while(i>=0)
// console.log(final_list)

// // in for loop:-

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
final_list=[]
for(let i=numbers.length-1;i>=0;i--){
    final_list.push(numbers[i])
}
console.log(final_list)
