//1 
function Animal(name) {
    // Initialize name property
    this.name = name
}

Animal.prototype.makeSound = function(){
  return "Some generic sound";
}
//-----------------------------------------------------




// 2
function Robot(name, batteryLevel) {
    this.name = name,
    this.batteryLevel  = batteryLevel
}

Robot.prototype.charge = function (){
      this.batteryLevel += 20;
      if(this.batteryLevel > 100){
        this.batteryLevel = 100
      }
      // console.log(`${this.batteryLevel}`)
}
//------------------------------------------------------



// 3
function Counter() {
    // Initialize count property

}
let count = 0
Counter.prototype.increment = function(){
    this.count  = count + 1
    return count
}
Counter.prototype.decrement = function(){
  this.count = count -1
  return count
}
//------------------------------------------------------

//4
function Playlist() {
    // Initialize songs property
 this.songs = []
}

Playlist.prototype.addSong = function(song){
  this.songs.push(song)
}
//--------------------------------------------------------



// 5

function ShoppingCart() {
     this.arr = []
}
ShoppingCart.prototype.addItem = function (price){
  this.arr.push(price)
}
ShoppingCart.prototype.getTotalPrice = function(){
  return this.arr.reduce((acc,price) => acc + price, 0)
}
//---------------------------------------------------------


//6
function BankAccount(balance) {
    // Initialize balance and transactions properties
    this.balance = balance
    this.history =[]

}
BankAccount.prototype.deposit = function(amount){
  if (this.balance > amount){
      `deposit ${this.balance + amount}`
      this.history.push(`Deposited ${amount}`);

  }
}
BankAccount.prototype.withdraw = function(amount){
  if (this.balance < amount){ 
         this.history.push("Insufficient balance")
  } else {
     `Withfrew ${this.balance - amount}`
    this.history.push(`Withdrew ${amount}`);

  }
}
BankAccount.prototype.getTransactionHistory = function (){
      return  this.history
}
//-------------------------------------------------------------