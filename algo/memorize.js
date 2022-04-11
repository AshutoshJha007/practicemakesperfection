function memorizeAdd80(){
  const cache = {};

  return function(n) {
    if(n in cache){
      return cache[n];
    }else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  }
}


const memo = memorizeAdd80();
console.log(memo(8));
console.log(memo(9));
console.log(memo(8));
console.log(memo(9));