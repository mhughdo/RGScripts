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
engine.on('game_starting', function(info) {
	//var bet = 0;
	//console.clear();
	console.log("Locking target...")
	//if(engine.lastGamePlay() == "LOST") bet = (lastBet/100) * IncreaseOnLoss;
//	else bet = StartingBet / 100;
	//lastBet = bet*100;
    //bet = Math.round(bet)*100;
    console.log(bet/100);
    if (play==false && bet!= StartingBet)
    {
        bet=StartingBet;
    }
    if (play && (bet/100)<=50)
    {
    engine.placeBet(bet, AutoCashout, function(){ });
    }
	
});

var bets = [];

engine.on('game_crash', function(data) {
    if  (engine.lastGamePlay()=='WON' )   { 
        bet=StartingBet;
    
 }
});
engine.on('game_started', function(data) {
	if(engine.lastGamePlayed()) bets = []; // Reset bets
	for(var i=0; i<Object.keys(data).length; i++){
		bets.push(data[Object.keys(data)[i]].bet); 
		if (data[Object.keys(data)[i]].username ==user)
		{
            play=true;
           
            
            bet=data[Object.keys(data)[i]].bet;
            bet=parseInt(bet);
           
            bet=Math.floor(bet);
          
        
            break;
        }
        else 
        {
            play=false;
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
    	console.log("Target hit!");
    }
});

// Some use less function:

