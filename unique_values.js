// // in for in loop:-

// let list= [1, 2, 2, 5, 8, 4, 4, 8];
// var list1=[],count=0;
// for (let i in list){
//     if(!list1.includes(list[i])){
//         list1.push(list[i])
//         count++
//     }
// }
// console.log(list1,"count=",count)


// //in while loop:-

// let list= [1, 2, 2, 5, 8, 4, 4, 8];
// var list1=[],i=0,count=0;
// while(i<list.length){
//     if(!list1.includes(list[i])){
//         list1.push(list[i])
//         count++
//     }
//     i++
// }
// console.log(list1,"count=",count)

// // in do while loop:-

// let list= [1, 2, 2, 5, 8, 4, 4, 8];
// var list1=[],i=0,count=0;
// do{
//     if(!list1.includes(list[i])){
//         list1.push(list[i])
//         count++
//     }
//     i++
// }while(i<list.length);
// console.log(list1,"count=",count)

// // in for  loop:-

// let list= [1, 2, 2, 5, 8, 4, 4, 8];
// var list1=[],count=0;
// for(let i=0;i<list.length;i++){
//     if(!list1.includes(list[i])){
//         list1.push(list[i])
//         count++
//     }
// }
// console.log(list1,"count=",count)

// // in for of loop:-

let list= [1, 2, 2, 5, 8, 4, 4, 8];
var list1=[],count=0;
for (let i of list){
    if(!list1.includes(i)){
        list1.push(i)
        count++
    }
}
console.log(list1,"count=",count)

