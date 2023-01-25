class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    // Your code here
  }

  read(index) {
    return this.data[index];
    // Your code here
  }

  push(val) {
    if(this.capacity === this.length) this.resize();
    this.data[this.length] = val;
    this.length++;
    return this.length;
    // Your code here
  }


  pop() {
    if(this.length <= 0) return undefined;
    this.length--;
    let val = this.data[this.length];
    this.data[this.length] = undefined;
    return val;
    // Your code here
  }

  shift() {
    if(this.length === this.capacity) this.resize();
    if(this.length <= 0) return undefined;
    let val = this.data[0];
    for (let i = 0; i < this.length; i++){
      this.data[i] = this.data[i+1];
    }
    this.length--;
    this.data[this.length] = undefined;
    return val;

    // Your code here
  }

  unshift(val) {
if(this.length === this.capacity) this.resize();

for(let i = this.length; i > 0; i--){
  this.data[i] = this.data[i-1];
}
this.data[0] = val;
this.length++;
    // Your code here
  }

  indexOf(val) {
    for(let i = 0; i < this.length; i++){
      if(this.data[i] === val) return i;
    }
    return -1;
    // Your code here
  }

  resize() {
    this.capacity *= 2;

    const newData = Array(this.capacity);
    for(let i = 0; i < this.length; i++){
      newData[i] = this.data[i];
    }
    this.data = newData;
    // Your code here
  }

}


module.exports = DynamicArray;
