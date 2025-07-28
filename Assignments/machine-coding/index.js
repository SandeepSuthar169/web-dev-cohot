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
//------------------ sum ---------------------------

function minValues (...num) {
    let x = num[0]
    for(let i = 0; i< num.length; i++){
        if( num[i] < x){
         x = num[i]
        }
     }
        return x

}
console.log(minValues(4, 2, 8, 1, 0)); // Output: -1
// console.log(minValues()); 