let list=[1, 1, 2, 3, 4, 4, 5, 1];
var list1=[];
for (let i in list){
    if (!list1.includes(list[i])){
        list1.push(list[i])
    }
}
var list3=[];
for (let j in list1){
    var count=0;
    for (let k in list){
        if(list1[j]==list[k]){
            count++
        }
    }
    list3.push([list1[j],count])
}
console.log(list3)
