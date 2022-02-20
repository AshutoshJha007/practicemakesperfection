//mergeSortedArray([0,3,4,31], [4,6,30]);

function mergeSortedArray(array1, array2){
  if( !array1 || !array2 ){
    return undefined
  }
  
  let firstSet = array1;
  let secondSet = array2;
  if(firstSet.length < 2 ){
    return secondSet;
  }
  if(secondSet.length < 2){
    return firstSet;
  }

  let finalSet = [];
  const counterEnd = firstSet.length + secondSet.length - 1;
  let counter =0;
  let firstCounter =0;
  let secondCounter =0;
  while(counter <= counterEnd){
    if(firstSet[firstCounter] <= secondSet[secondCounter] || !secondSet[secondCounter]){
      finalSet.push(firstSet[firstCounter]);
      firstCounter++;
    }else{
      finalSet.push(secondSet[secondCounter]);
      secondCounter++;
    }
    counter++;
  }
  return finalSet;
}

console.log(mergeSortedArray([0,3,4,31], [4,6,30]));