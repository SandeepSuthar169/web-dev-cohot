//1
function distributeGifts(totalGifts, friends) {
    // write your code here
    let gifts = 0
    for(let i  = 0; i < friends; i++){
      if(totalGifts > 0){
          gifts  = gifts + 1
          totalGifts = totalGifts - 1
      }
  
    }
    return gifts
  }
//------------------------------------------------------  