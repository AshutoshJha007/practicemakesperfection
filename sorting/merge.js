const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array){
  if(array.length === 1) return array;

  let mid = array.length / 2;
  let left = array.slice(0,mid);
  let right = array.slice(mid);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge( left, right ) {
  let final = [];
  let lindex = 0 ;
  let rindex = 0 ;

  while(lindex < left.length && rindex < right.length){
    if(left[lindex] < right[rindex]){
      final.push(left[lindex]);
      lindex++
    }else {
      final.push(right[rindex]);
      rindex++;
    }
  }

  return final.concat(left.slice(lindex)).concat(right.slice(rindex));
}


const answer = mergeSort(numbers);
console.log(answer);