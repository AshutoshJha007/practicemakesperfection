//google questing 
// find the first recurssion [2,3,5,2,3] => 3


function firstRecurressionItem(array){
  const map = {};
  for(let i = 0 ; i < array.length ; i++){
    console.log(map);
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]] = i;
  }
  return undefined;
}

console.log(firstRecurressionItem([2,3,5,2,5]));


// 2
function firstRecurssionItem2(array){
 const map = {}
 for(let i = 0; i < array.length ; i++){
   console.log(map)
   if(map[array[i]] !== undefined){
     return array[i];
   }
   map[array[i]] = i;
 }
 return undefined;
}

console.log(firstRecurssionItem2([2,5,5,2]))


//3
function firstr3(array){
  const map = {};
  for(let i = 0; i < array.length ; i++){
    console.log(map);
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]] = i;
  }
}


console.log(firstr3([2,4,5,6,7]));


//4

function firstr4(array){
  const map = {};
  for(let i = 0 ; i < array.length ; i++){
    console.log(map);
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]] = i;
  }
  return undefined;
}

console.log(firstr4([1,2,3,4,1,2]))

//5

function firstr5(array){
  const map = {};
  for(let i = 0 ; i < array.length ; i++){
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]] = i;
  }
}

console.log(firstr5([1,2,3,4,2]));

//6
function firstr6(array){
  const map = {};
  for(let i = 0 ; i < array.length ; i++){
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]] = i;
  }
}

console.log(firstr6([1,2,3,4,2]));


//7

function firstr7(array){
  const map = {};
  for(let i = 0 ; i < array.length ; i++){
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]]= i;
  }
  return undefined;
}

console.log(firstr7([1,2,3,4,2]));


//8

function firstr8(array){
  const map = {};
  for(let i = 0 ; i < array.length ; i++ ){
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]] = i;
  }
  return undefined;
}

console.log(firstr8([1,2,3,4,1]));


//9

function firstr9(array){
  const map = {};
  for(let i = 0; i < array.length ; i++){
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]] = i;
  }
  return undefined;
}

console.log(firstr9([1,2,3,4,3,5]));

//10
function firstr10(array){
  const map = {};
  for(let i = 0; i < array.length; i++){
    if(map[array[i]] !== undefined){
      return array[i];
    }
    map[array[i]] = i;
  }
  return undefined;
}

console.log(firstr10([1,2,3,4,1]))