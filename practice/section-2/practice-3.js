'use strict';

function countSameElements(collection) {
  var res=[];
  for (var char of collection) {
    var obj=res.find(function (obj) {
      return obj.name===char;
    });
    if(obj){
      obj.summary++;
    }else {
      if(char.match('-')){
        var arr=char.split('-');
        var flag=0;
        for (var obj1 of res) {
          if(obj1.name===arr[0]){
            obj1.summary+=Number(arr[1]);
            flag++;
          }
        }
        if(!flag)
        res.push({name:arr[0],summary:Number(arr[1])})
      }
      if(char.match(':')){
        var arr=char.split(':');
        res.push({name:arr[0],summary:Number(arr[1])})
      }
      if (char.match(']')) {
        var value = char.replace(/[^0-9]/ig, "");
        var nname = char.replace(/[^a-z]/ig, "");
        for (var oname of res) {
          if (oname.name === nname) {
            oname.summary += Number(value);
          }
        }
      }
      if(char.length===1){
        res.push({name: char, summary: 1})
      }

    }
  }
  console.log(res);
  return res;
}




