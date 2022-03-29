let array=[12, 45, 23, 67, 78, 90, 45, 32, 100, 76, 38, 62, 73, 29, 83];
var i=0,list1=[],count=0,list2=[];
while(i<array.length){
   if(count==4){
       list1.push(list2)
       list2=[]
       count=0
       i=i-1
   } else{
       list2.push(array[i])
       count++
   }
   i++
}
list1.push(list2)
console.log(list1)