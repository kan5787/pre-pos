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
      if (char.match(']')||char.match('-')||char.match(':')) {
        var value = char.replace(/[^0-9]/ig, "");
        var nname = char.replace(/[^a-z]/ig, "");
        var flag=0;
        for (var obj1 of res) {
          if(obj1.name===nname){
            obj1.summary+=Number(value);
            flag++;
          }
        }
        if(!flag)
          res.push({name:nname,summary:Number(value)})
      }
      if(char.length===1){
        res.push({name: char, summary: 1})
      }
    }
  }
  return res;
}




