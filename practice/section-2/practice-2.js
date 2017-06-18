'use strict';

function countSameElements(collection) {
  var res=[];
  for (var char of collection) {
    var obj=res.find(function (obj) {
      return obj.key===char;
    });
    if(obj){
      obj.count++;
    }else {
      if(char.match('-')){
        var arr=char.split('-');
        res.push({key:arr[0],count:Number(arr[1])})
      }
      else
      res.push({key: char, count: 1})
    }
  }
  console.log(res);
  return res;
}

