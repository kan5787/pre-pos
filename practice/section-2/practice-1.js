'use strict';

function countSameElements(collection) {
  var res=[];
  for (var char of collection) {
    var obj=res.find(function (obj) {
      return obj.key===char;
    })
    if(obj){
      obj.count++;
    }else {
      res.push({key: char, count: 1})
    }
  }
  return res;
}
