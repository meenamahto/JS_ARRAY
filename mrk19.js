// // in while loop:-

// var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// var crorepati=0,lakhpati=0,dilwale=0,i=0;
// while(i<kitnapaisahai.length){
//     if(kitnapaisahai[i]>=10000000){
//         crorepati+=1
//     }
//     else if(kitnapaisahai[i]>=100000 && kitnapaisahai[i]<10000000){
//         lakhpati+=1
//     }
//     else{
//         dilwale+=1
//     }
//     i++
// }
// console.log("crorepati hai",crorepati,"\nlakhpati hai",lakhpati,"\ndilwale hai",dilwale)

// // in do while loop:-

// var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// var crorepati=0,lakhpati=0,dilwale=0,i=0;
// do{
//     if(kitnapaisahai[i]>=10000000){
//         crorepati+=1
//     }
//     else if(kitnapaisahai[i]>=100000 && kitnapaisahai[i]<10000000){
//         lakhpati+=1
//     }
//     else{
//         dilwale+=1
//     }
//     i++
// }while(i<kitnapaisahai.length)
// console.log("crorepati hai",crorepati,"\nlakhpati hai",lakhpati,"\ndilwale hai",dilwale)

// // in for loop:-

// var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// var crorepati=0,lakhpati=0,dilwale=0;
// for(let i=0;i<kitnapaisahai.length;i++){
//     if(kitnapaisahai[i]>=10000000){
//         crorepati+=1
//     }
//     else if(kitnapaisahai[i]>=100000 && kitnapaisahai[i]<10000000){
//         lakhpati+=1
//     }
//     else{
//         dilwale+=1
//     }
// }
// console.log("crorepati hai",crorepati,"\nlakhpati hai",lakhpati,"\ndilwale hai",dilwale)

// // in for in loop:-

// var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// var crorepati=0,lakhpati=0,dilwale=0;
// for(let i in kitnapaisahai){
//     if(kitnapaisahai[i]>=10000000){
//         crorepati+=1
//     }
//     else if(kitnapaisahai[i]>=100000 && kitnapaisahai[i]<10000000){
//         lakhpati+=1
//     }
//     else{
//         dilwale+=1
//     }
// }
// console.log("crorepati hai",crorepati,"\nlakhpati hai",lakhpati,"\ndilwale hai",dilwale)

// // in for of loop:-

var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var crorepati=0,lakhpati=0,dilwale=0;
for(let i of kitnapaisahai){
    if(i>=10000000){
        crorepati+=1
    }
    else if(i>=100000 && i<10000000){
        lakhpati+=1
    }
    else{
        dilwale+=1
    }
}
console.log("crorepati hai",crorepati,"\nlakhpati hai",lakhpati,"\ndilwale hai",dilwale)
