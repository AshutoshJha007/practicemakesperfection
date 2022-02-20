class HashTable{
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key){
    let hash =0;
    for(let i=0;i< key.length;i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key,value){
    let hash = this._hash(key);
    if(!this.data[hash]){
      this.data[hash] = [];
    }
    this.data[hash].push([key,value]);
  }

  get(key){
    let hash = this._hash(key);
    let resultSet = this.data[hash];
    for(let result of resultSet){
      if(result[0] === key){
        return result[1];
      }
    }
    return undefined;
  }

  keys(){
    let keys = [];
    for(let bucket of this.data){
      if(bucket){
        for(let arrays of bucket){
          keys.push(arrays[0]);
        }
      }
    }
    return keys;
  }
}

const myhash = new HashTable(3);
console.log(myhash._hash('grapes'));
myhash.set("grapes",1000);
myhash.set("apple",50);
console.log(myhash.get("grapes"))
console.log(myhash.get("apple"))
console.log(myhash.keys())
console.log(myhash)
