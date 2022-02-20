function reverse(str){
  return str.split('').reverse().join('');
}

function reverse2(str){
  //check input
  if(!str || str.length < 2 || typeof str !== 'string'){
    return "sorry try again"
  }
  let reverseStr = [];
  for(let i= str.length -1 ; i >= 0 ;i--){
    reverseStr.push(str[i]);
  }
  return reverseStr.join('');
}

console.log(reverse("Hi I am AJ"));
console.log(reverse2("Hi I am AJ"));