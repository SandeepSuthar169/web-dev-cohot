setTimeout(function() {console.log('hello world');}, 1000 * 5)


setTimeout(() => {console.log(('i am sandeep'));}, 1000 * 6);   // minimum take time  6s   max : inf
//--------------------------------------

setTimeout(() => {console.log('hello world ');}, 0);           

//-----------------------------------------

const obj = {
    paersonName: 'sandeep',
    greet: function() {
        console.log('hiiii', this.paersonName);
    }
}
setTimeout(obj.greet, 2 * 1000);               // hiii undefined
setTimeout(obj.greet.bind(obj), 2 * 10000)     // hiii sandeep 
//--------------------------------------------