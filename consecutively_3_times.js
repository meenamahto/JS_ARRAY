let list=[1, 1, 1, 64, 23, 64, 22, 22, 22];
for(let i=0;i<list.length-1;i++){
    if(list[i]==list[i+1] && list[i+1]==list[i+2]){
        console.log(list[i])
    }
}
