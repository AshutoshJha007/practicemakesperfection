const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {

  let index = 0;
  while( index < array.length ){
    if(array[index] > array[index+1]) rearrange(array, index+1 );
    console.log(array)
    index ++;
  }
  
}

function rearrange(array, endIndex){
  const insertionIndex = findTheIndextoInsert(array, endIndex);
  let num = array[endIndex];
  array.splice(endIndex,1);
  array.splice(insertionIndex,0,num);
}


function findTheIndextoInsert(array, endIndex){
  let num = array[endIndex];
  for(let i = 0 ; i < endIndex; i++){
    if(array[i] > num) return i;
  }
}

insertionSort(numbers);
console.log(numbers);