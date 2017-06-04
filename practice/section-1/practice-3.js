'use strict';

function collectSameElements(collectionA, objectB) {
  var Arr=[];
  for(var i=0;i<collectionA.length;i++) {
    for(var j=0;j<objectB.value.length; j++) {
      if(collectionA[i] === objectB.value[j]) {
        Arr.push(collectionA[i]);
      }
    }
  }
  return Arr;
}
