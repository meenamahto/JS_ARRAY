let  list=['Red', 'Maroon', 'Yellow', 'Olive'];
var i=0,list2=[];
while(i<list.length){
    var j=0,list1=[];
    while(j<list[i].length){
        slpit=""
        slpit+=list[i][j]
        list1.push(slpit)
        j++
    }
    list2.push(list1)
    i++
}
console.log(list2)