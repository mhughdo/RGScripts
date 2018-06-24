var baseBet=1;
var baseCashout = 2;
var currentBet=baseBet ;
var maxLosses=3;
var currentCashout = baseCashout;
var lossStreak = 0;
//var multi=[2,1.25,1.31,1.33,1.33,1.35,1.35,1.35,1.35,1.35];
var play=true;
var key=0;


engine.on('game_crash', function(data) {
	
	if(engine.lastGamePlay()=='NOT_PLAYED'&&lossStreak!=0)
		{
            var thing = engine.getEngine();
   var precr=thing.tableHistory[0].game_crash/100;
  if (precr>=1.97)
  {
      play=true;
  }
        }
	
	if(engine.lastGamePlay()=='LOST'){

        lossStreak++;
        key++;
	if (lossStreak==maxLosses) engine.stop();
        
    play=false;
    if (key==1)
    {
        currentBet*=100;
        currentCashout=1.00; 
    }
    else if (key==2)
    {
        currentBet*=10;
        currentCashout=1.1; 
    }
       
		
		
	}
	else if (engine.lastGamePlay()=="WON")
    {
        key=0;
        lossStreak=0;
        currentBet=baseBet;
        currentCashout=baseCashout;
        play=true;
    }
if(play)       
engine.placeBet(currentBet*100,  Math.round(currentCashout*100));


});
