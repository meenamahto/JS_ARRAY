// // //in for in loop:-

// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// var list3=[]
// for (let i in list1){
//     if (!list2.includes(list1[i])){
//         list3.push(list1[i])
//     }
// }console.log(list3)

// // // in while loop:-

// var list1 = [1,2,3,4,5,6];
// var list2 = [2,3,1,0,6,7];
// var list3=[];
// var i=0;
// while(i<list1.length){
//     if (!list2.includes(list1[i])){
//         list3.push(list1[i])
//     }
//     i++
// }console.log(list3)


// //in do while loop:-

// var list1 = [1,2,3,4,5,6];
// var list2 = [2,3,1,0,6,7];
// var list3=[];
// var i=0;
// do{
//     if(!list2.includes(list1[i])){
//         list3.push(list1[i])
//     }
//     i++
// }while(i<list1.length)
// console.log(list3)

// // in for loop:-

var list1 = [1,2,3,4,5,6];
var list2 = [2,3,1,0,6,7];
var list3=[];
for(var i=0;i<list1.length;i++){
    if (!list2.includes(list1[i])){
        list3.push(list1[i])
    }
}console.log(list3)