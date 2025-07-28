const numbers = [1, 2, 3];
const results = numbers.map((n) => n * 2);

console.log({ results });
//----------------------------------------------------
if (!Array.prototype.My_Map) {
    Array.prototype.My_Map = function(user_funciton) {
        const result = [];

        for (let i = 0; i <this.length; i++){
            const value = user_funciton(this[i], i);
            result.push(value)
        }
        return result;
    }
}

const arr = [1, 2, 3, 4, 5, 6];
const n2 = arr.My_Map((e) => e * 3);
console.log(n2);
//------------------------------------------------------