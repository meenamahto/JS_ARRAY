// // in while loop:-

// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// var i=0,unique=[];
// while(i<char_list.length){
//     if(!unique.includes(char_list[i])){
//         unique.push(char_list[i])
//     }
//     i=i+1
// }
// console.log(unique)
// var i=0;
// while(i<unique.length){
//     var j=0,count=0;
//     while (j<char_list.length){
//         if (unique[i]==char_list[j]){
//             count++
//         }
//         j=j+1
//     }
//     console.log(unique[i],count,"times")
//     i=i+1
// }

// // in do while loop:-

// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// var i=0,unique=[];
// do{
//     if(!unique.includes(char_list[i])){
//         unique.push(char_list[i])
//     }
//     i=i+1
// }while(i<char_list.length)
// console.log(unique)
// var i=0;
// do{
//     var j=0,count=0;
//     while (j<char_list.length){
//         if (unique[i]==char_list[j]){
//             count++
//         }
//         j=j+1
//     }
//     console.log(unique[i],count,"times")
//     i=i+1
// }while(i<unique.length)

// // in for loop:-

// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// var unique=[];
// for(let i=0;i<char_list.length;i++){
//     if(!unique.includes(char_list[i])){
//         unique.push(char_list[i])
//     }
// }
// console.log(unique)
// var i=0;
// for(let i=0;i<unique.length;i++){
//     var j=0,count=0;
//     for(let j=0;j<char_list.length;j++){
//         if (unique[i]==char_list[j]){
//             count++
//         }
//     }
//     console.log(unique[i],count,"times")
// }

// // in for in loop:-


// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// var unique=[];
// for(let i in char_list){
//     if(!unique.includes(char_list[i])){
//         unique.push(char_list[i])
//     }
// }
// console.log(unique)
// var i=0;
// for(let i in unique){
//     var j=0,count=0;
//     for(let j in char_list){
//         if (unique[i]==char_list[j]){
//             count++
//         }
//     }
//     console.log(unique[i],count,"times")
// }

// //in for of loop:-


var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var unique=[];
for(let i of char_list){
    if(!unique.includes(i)){
        unique.push(i)
    }
}
console.log(unique)
var i=0;
for(let i of unique){
    var j=0,count=0;
    for(let j of char_list){
        if (i==j){
            count++
        }
    }
    console.log(i,count,"times")
}
