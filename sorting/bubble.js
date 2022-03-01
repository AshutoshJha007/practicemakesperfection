const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

  let index = array.length;
  while(index > 0){
    for(let i = 0; i < index - 1 ; i++){
      if(array[i] > array[i+1]) swap(array, i , i+1);
    }
    console.log(array);
    index -- ;
  }
  return array;
}

function swap(array, i, j){
  
  let temp = array[i] ;
  array[i] = array[j] ;
  array[j] = temp ;
  
}

bubbleSort(numbers);
console.log(numbers);