'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var objC=creatCObj(collectionA);
  for (var obj of objC) {
    for (var char of objectB.value) {
      if(char===obj.key){
        var mod=Math.floor(obj.count/3);
        obj.count-=mod;
      }
    }
  }
  console.log(objC);
  return objC;
}

function creatCObj(collectionA) {
  var res=[];
  for (var char of collectionA) {
    var obj=res.find(function (obj) {
      return obj.key===char;
    });
    if(obj){
      obj.count++;
    }else {
      res.push({key: char, count: 1})
    }
  }
  return res;
}
