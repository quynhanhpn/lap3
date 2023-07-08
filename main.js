H = 5
for (i=0; i< H; i++){
    for(k=H; k>i; k--){
        document.write("&nbsp;&nbsp")
    }
    for(j=0; j<i*2-1; j++){
        document.writeln(1);
    }
 document.write("<br/>")
 document.write("<br/>")
}
myArr = [9,7,9,0,7,8,387,123,456,]
for (var key of myArr){
    if(key % 2 == 0){
        console.log(key);
    }
}
var myAnswer =  prompt("em đã ăn cơm chưa");

for (i=0; i< myAnswer.length; i++){
    if(myAnswer == 'yes'){
        prompt("em có muốn ăn tráng miệng không")
    }
    if(myAnswer == 'no'){
        prompt("em muốn ăn sườn xào chua ngọt không")
    }
}
