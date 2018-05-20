

 /*¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|
//  Bustabit Bonus Sniper v0.2R8 -  Made by http://dexontech.net/    |
//___________________________________________________________________|
//
//	Bot that will 'snipe' those bonus for you.
//	It will automatically cashout right after the biggest
//	 bet during the round. To snipe that bonus!
//
//	Have fun!
//
//	My address: 16gj85L3364SGdcUG5tb2wJkhG8UVF5r6j
*/

var	StartingBet		=	100, //(INTEGER) Initial bet that'll snipe the bonus. Note: 100 = 1 bit.
AutoCashout		=	1000000; //(FLOAT) Will increase +1.30x of the last bet if lost.

//--------> EDIT OVER THIS LINE <--------
var user='Wesley';
var bet=StartingBet;
var play=false;
var p =-1;
engine.on('game_starting', function(info) {
    setTimeout(function(){  
     p=x(user);
  // console.log(p);
if (p==0 && bet!= StartingBet)
{
    bet=StartingBet;
}
if (p==1)
{
   // console.log(bet);
engine.placeBet(bet, AutoCashout, function(){ });
}
}, 3000);
});


engine.on('game_crash', function(data) {
if  (engine.lastGamePlay()=='WON' )   { 
    bet=StartingBet;

}
});
engine.on('game_started', function(data) {
if (p==1)
for(var i=0; i<Object.keys(data).length; i++){

    if (data[Object.keys(data)[i]].username ==user)
    {
      
       
        
        bet=data[Object.keys(data)[i]].bet;
        bet=parseInt(bet);
       
        bet=Math.floor(bet);
      
    
        break;
    }
 
    // Get all bets
}

/*
for(var i=0; i<Object.keys(data).length; i++){
    if(data[Object.keys(data)[i]].bet == bets.max()){
        highestBetUser = data[Object.keys(data)[i]].username; // Get the highest one!
    }
} 
console.log("Target acquired! ("+highestBetUser+")");*/
});

engine.on('cashed_out', function(data) {
if(data.username == user){
    setTimeout(function(){ engine.cashOut(); }, 0);
  //  console.log("Target hit!");
}
});

  function x(user)
  {
    
        var parentDOM = document.getElementById("game-right-container");
            
            var test=parentDOM.getElementsByClassName("table-inner");
    var tex=test[0].innerText;
   // console.log(user);
    if (tex.indexOf(user)!=-1)
    {
    return 1;
    }
    else 
    {
    return 0;} 
   
  }
  
  
