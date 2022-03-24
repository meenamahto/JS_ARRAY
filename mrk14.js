// // in while loop;-

// var number = 30;
// var n = [10, 11, 12, 13, 14, 17, 18, 19];
// var i=0,list=[];
// while(i<n.length){
//     var j=0;
//     while(j<n.length){
//         if (n[i]+n[j]==number){
//             list.push([n[i],n[j]])
//         }
//         j++
//     }
//     i++
// }console.log(list)

// // in do while loop:-

// numbers=30
// var n = [10, 11, 12, 13, 14, 17, 18, 19];
// var i=0,list=[];
// do{
//     var j=0;
//     do{
//         if (n[i]+n[j]==numbers){
//             list.push([n[i],n[j]])
//         }
//         j++
//     }while(j<n.length);
//     i++
// }while(i<n.length);
// console.log(list)

// // in for loop:-

// numbers=30
// var n = [10, 11, 12, 13, 14, 17, 18, 19];
// var list=[]
// for (let i=0;i<n.length;i++){
//     for (let j=0;j<n.length;j++){
//         if(n[i]+n[j]==numbers){
//             list.push([n[i],n[j]])
//         }
//     }
// }console.log(list)

// // in for in loop:-

// numbers=30
// var n = [10, 11, 12, 13, 14, 17, 18, 19];
// var list=[]
// for (let i in n){
//     for (let j in n){
//         if(n[i]+n[j]==numbers){
//             list.push([n[i],n[j]])
//         }
//     }
// }console.log(list)

// // in for of loop:-

numbers=30
var n = [10, 11, 12, 13, 14, 17, 18, 19];
var list=[]
for (let i of n){
    for (let j of n){
        if(i+j==numbers){
            list.push([i,j])
        }
    }
}console.log(list)