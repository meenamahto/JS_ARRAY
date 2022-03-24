// // in while loop:-

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var i=0,even_count=0,odd_count=0;
// while(i<elements.length){
//     if(elements[i]%2==0){
//         even_count+=1
//     }
//     else{
//         odd_count++
//     }
//     i=i+1
// }console.log("even_numbers=",even_count,"\nodd_numbers=",odd_count)

// // in do while loop:-

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var i=0,even_count=0,odd_count=0;
// do{
//     if(elements[i]%2==0){
//         even_count++
//     }
//     else{
//         odd_count++
//     }
//     i++
// }while (i<elements.length);
// console.log("even_numbers=",even_count,"\nodd_numbers=",odd_count)

// // in for loop:-

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var even_count=0,odd_count=0;
// for (let i=0;i<elements.length;i++){
//     if(elements[i]%2==0){
//         even_count++
//     }
//     else{
//         odd_count++
//     }
// }console.log("even_numbers=",even_count,"\nodd_numbers=",odd_count)

// // in for in loop:-

// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var even_count=0,odd_count=0;
// for(let i in elements){
//     if(elements[i]%2==0){
//         even_count++
//     }
//     else{
//         odd_count++
//     }
// }console.log("even_numbers=",even_count,"\nodd_numbers=",odd_count)

// // in for of loop:-

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even_count=0,odd_count=0;
for(let i of elements){
    if(i%2==0){
        even_count++
    }
    else{
        odd_count++
    }
}console.log("even_numbers=",even_count,"\nodd_numbers=",odd_count)