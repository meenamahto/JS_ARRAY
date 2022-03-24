// //in while loop:-

// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]
// var i=0,sum=0;
// while(i<marks.length){
//     var j=0
//     while(j<marks[i].length){
//         sum+=marks[i][j]
//         j=j+1
//     }
//     i=i+1
// }console.log(sum)

// // in do while loop:-

// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]
// var i=0,sum=0;
// do{
//     var j=0
//     do{
//         sum=sum+marks[i][j]
//         j++
//     }while(j<marks[i].length);
//     i++
// }while(i<marks.length)
// console.log(sum)

// // in for loop:-

// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]
// for (var i=0,sum=0;i<marks.length;i++){
//     for (var j=0;j<marks[i].length;j++){
//         sum+=marks[i][j]
//     }
// }console.log(sum)

// //in for in loop:-

// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]
// var sum=0
// for (let i in marks){
//     for (let j in marks[i]){
//         sum+=marks[i][j]
//     }
// }console.log(sum)

// // in for of loop:-

// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]
// var sum=0
// for (let i of marks){
//     for (let j of i){
//         sum+=j
//     }
// }console.log(sum)
