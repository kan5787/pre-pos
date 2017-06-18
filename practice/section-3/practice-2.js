'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var obj of collectionA) {
    for (var char of objectB.value) {
      if(char===obj.key){
        var mod=Math.floor(obj.count/3);
          obj.count-=mod;
      }
    }
  }
  console.log(collectionA);
  return collectionA;
}
