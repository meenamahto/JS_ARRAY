// // in for in loop:-

// let list=[1, 2, 3];
// for(let i in list){
//     for(let j in list){
//         for (let k in list){
//             if(i!=j && j!=k && k!=i){
//                 console.log(list[i],list[j],list[k])
//             }
//         }
//     }
// }


// // in while loop:-

// let list=[1, 2, 3];
// var i=0;
// while(i<list.length){
//     var j=0;
//     while(j<list.length){
//         var k=0;
//         while(k<list.length){
//             if(i!=j && j!=k && k!=i){
//                 console.log(list[i],list[j],list[k])
//             }
//             k++
//         }
//         j++
//     }
//     i++
// }

// // in do while loop:-

let list=[1, 2, 3];
var i=0;
do{
    var j=0;
    do{
        var k=0;
        do{
            if(i!=j && j!=k && k!=i){
                console.log(list[i],list[j],list[k])
            }
            k++
        }while(k<list.length)
        j++
    }while(j<list.length);
    i++
}while(i<list.length);