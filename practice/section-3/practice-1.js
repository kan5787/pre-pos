'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var obj of collectionA) {
    for (var char of objectB.value) {
      if(char===obj.key)
        obj.count--;
    }
  }
  return collectionA;
}
