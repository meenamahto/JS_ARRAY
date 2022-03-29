// // in for loop:-

// let list=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var list1=[];
// for (let i=0;i< list.length-1;i++){
//     list1.push(list[i+1]-list[i])
// }
// console.log(list1)


// // in while loop:-

// let list=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var list1=[],i=0;
// while(i<list.length-1){
//     list1.push(list[i+1]-list[i])
//     i++
// }
// console.log(list1)

// // in do while loop:-

let list=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var list1=[],i=0;
do{
    list1.push(list[i+1]-list[i])
    i++
}while(i<list.length-1);
console.log(list1)