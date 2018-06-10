
var	StartingBet		=	100, 
	AutoCashout		=	1000000;
var user="Wesley";
var bet=StartingBet;
var play=false;
var check=false;

engine.on('player_bet', function(data) {

if (data.username==user)
play=true; else play=false;


    if ( play  )
    {

//console.log("Yes");
   engine.placeBet(bet, AutoCashout, function(){ });
    }    
});

engine.on('game_crash', function(data) {
    if  (engine.lastGamePlay()=='WON' )   { 
        bet=StartingBet;

    
 }
});
engine.on('game_started', function(data) {
	
	for(var i=0; i<Object.keys(data).length; i++){
		if (data[Object.keys(data)[i]].username ==user)
		{
check=true;
             bet=data[Object.keys(data)[i]].bet;
            bet=parseInt(bet);
           bet=Math.floor(bet);
console.log(bet);
break;
    }
else 
{
  check=false;
}
       
	
	
  }
if (check==false && bet!=StartingBet)  bet=StartingBet;
 
});

engine.on('cashed_out', function(data) {
    if(data.username == user){
     engine.cashOut();
    	}
});
