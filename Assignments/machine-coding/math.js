//--------------------- Map function ------------------------------- 
const numbers = [1, 2, 3];
const results = numbers.map((n) => n * 2);

// console.log({ results });
//-------------------------------------------------------------------
if (!Array.prototype.I_Map) {
    Array.prototype.I_Map = function(user_funciton) {
        const result = [];

        for (let i = 0; i <this.length; i++){
            const value = user_funciton(this[i], i);
            result.push(value)
        }
        return result;
    }
}

const arr = [1, 2, 3, 4, 5, 6];
const n2 = arr.I_Map((e) => e * 3);
// console.log(n2);

//------------------ Filter funciton  ---------------------------

const n =  [1, 2, 3, 4, 5, 6]
const result = n.filter(( n ) => n % 2 == 0)

// console.log(result);
//---------------------------------------------------------------
if(!Array.prototype.I_Filter){
    Array.prototype.I_Filter = function(user_funciton){
        const result = [];

        for (let i = 0; i < this.length; i++){
            if(user_funciton(this[i])){
                result.push(this[i])
            }
        }
        return result;
    }
}

const num = [1, 2, 3, 4, 5, 6, 6, 8, 9, 10]
const n1 = num.I_Filter((n) => n % 2 == 0)
// console.log(n1);



//------------------ MIN.MATH ---------------------------
if(!Array.prototype.My_min){
    Array.prototype.My_min = function minValues () {
    
        let min = this[0]
        for(let i = 0; i< this.length; i++){
            if( this[i] < min){
            min = this[i]
        }
    }
    return min
    
    }
}
// console.log(minValues(4, 2, 8, 1, 0));
const array1 = [1, 2, 3, 4, 5, 6];
const n4 = array1.My_min();
console.log(n4); // Output: 6

//------------------- MAX.MATH ------------------------------

if (!Array.prototype.My_Max) {
  Array.prototype.My_Max = function () {

    let max = this[0];
    for (let i = 1; i < this.length; i++) {
      if (this[i] > max) {
        max = this[i];
      }
    }
    return max;
  };
}

const array = [1, 2, 3, 4, 5, 6];
const n5 = array.My_Max();
console.log(n5); // Output: 6

