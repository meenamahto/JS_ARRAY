// // in while loop:-

// var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11];
// var i=0,unique=[];
// while(i<n.length){
//     if (!unique.includes(n[i])){
//         unique.push(n[i])
//     }
//     i++
// }
// console.log(unique)
// var i=0,duplicates=[];
// while(i<unique.length){
//     var j=0,count=0;
//     while(j<n.length){
//         if (unique[i]==n[j]){
//             count+=1
//         }
//         j++
//     }
//     if (count>1){
//         duplicates.push(unique[i])
//     }
//     i++
// }
// console.log(duplicates)

// // in do while loop:-

// var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11];
// var i=0,unique=[];
// do{
//     if (!unique.includes(n[i])){
//         unique.push(n[i])
//     }
//     i++
// }while(i<n.length)
// console.log(unique)
// var i=0,duplicates=[];
// do{
//     var j=0,count=0;
//     do{
//         if (unique[i]==n[j]){
//             count+=1
//         }
//         j++
//     }while(j<n.length)
//     if (count>1){
//         duplicates.push(unique[i])
//     }
//     i++
// }while(i<unique.length)
// console.log(duplicates)

// // in for of loop:-

// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// uniques=[]
// duplicates=[]
// for(var i of number_list){
//   if(!uniques.includes(i)){
//       uniques.push(i)
//   }
// }
 
// for(var j of uniques){
//   count=0
//   for(var k of number_list){
//       if (j === k){
//           count+=1
//       }
//   }
//  if(count >1){
//    duplicates.push(j);
//  };
// }
 
// console.log(duplicates);

// // in for in loop:-

// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// uniques=[]
// duplicates=[]
// for(var i in number_list){
//   if(!uniques.includes(number_list[i])){
//       uniques.push(number_list[i])
//   }
// }
 
// for(var j in uniques){
//   count=0
//   for(var k in number_list){
//       if (uniques[j]=== number_list[k]){
//           count+=1
//       }
//   }
//  if(count >1){
//    duplicates.push(uniques[j]);
//  };
// }
 
// console.log(duplicates);

// // in for loop:-

var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
uniques=[]
duplicates=[]
for(var i=0;i< number_list.length;i++){
  if(!uniques.includes(number_list[i])){
      uniques.push(number_list[i])
  }
}
 
for(var j=0;j<uniques.length;j++){
  count=0
  for(var k=0;k< number_list.length;k++){
      if (uniques[j]=== number_list[k]){
          count+=1
      }
  }
 if(count >1){
   duplicates.push(uniques[j]);
 };
}
 
console.log(duplicates);