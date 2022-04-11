/*
[-7,-5,-1,1,3,5,7]
//Input is sorted
//Sq
//Output sorted
[49,25,9,0,9,25,49]

stack
negivet


49

+ve
1 1 9 


//sq
//sort
nlogn

[49,25,9,0,9,25,49]

49 25 9 0 9 25 49

[25,49] [0,9] [9,25] [49]

	[0,9,25,49] [9,25,49]

		[0,9,9,25,25,49,49]
*/

let array = [1,2,3,4];

function getSQ(array) {
	const stack = [];
	const output =[];
	for(let i =0; i<array.length;i++) {
		if(array[i] < 0) {
			stack.push(array[i]*array[i]);
		}
		else if(array[i] >= 0) {
			const sqNum = array[i] * array[i];
			if(sqNum < stack[stack.length-1]){
				output.push(sqNum);
			}
			else if(sqNum >= stack[stack.length-1]) {
				while(stack.length >0 && sqNum >= stack[stack.length-1]) {
				output.push(stack.pop());
				}

				}
				output.push(sqNum);
		}
		
	}
	while(stack.length > 0 && stack.length >= 0){
		output.push(stack.pop())
	}
	return output;
}

console.log(getSQ(array));