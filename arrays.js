class MyArray{
  constructor(){
    this.data = {};
    this.length = 0;
  }

  get(index){
    return this.data[index]
  }

  push(value){
    this.data[this.length] = value;
    return ++this.length;

  }

  pop(){
    if(this.length === 0)
      return undefined;
    this.length--;
    const lastItem = this.data[this.length];
    delete this.data[this.length];
    return lastItem;

  }

  delete(index){
    if(this.length === 0){
      return undefined;
    }
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index){
    let counter = index;
    while(counter < this.length){
      this.data[counter] = this.data[counter+1];
      counter++;
    }
    delete this.data[this.length-1];
    this.length--;
  }

}


const newArray = new MyArray();
newArray.push("ashu")
newArray.push("jha")
newArray.push("tosh")
newArray.push("AJ")
console.log(newArray.get(0));
console.log(newArray.get(1));
//console.log(newArray.pop());

console.log(newArray);
console.log(newArray.delete(1));

console.log(newArray);
