const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

  let swapIndex = 0 ;
  let smallestNumIndex = 0;
  while(swapIndex < array.length){
    for(let i = swapIndex ; i < array.length ; i++ ){
      if(array[smallestNumIndex] > array[i]) smallestNumIndex = i;
      if(i === array.length-1) swap(array,swapIndex, smallestNumIndex);
    }
    console.log(array)
    swapIndex ++ ;
  }
}

function swap(array, i, j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

selectionSort(numbers);
console.log(numbers)