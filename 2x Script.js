var baseBet=1;
var baseCashout = 2;
var currentBet=baseBet ;
var maxLosses=6;
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
	if (lossStreak==maxLosses) engine.stop();
        
    play=false;
         currentBet*=10;
         currentCashout=1.13;
		
		
	}
	else if (engine.lastGamePlay()=="WON")
    {
        lossStreak=0;
        currentBet=baseBet;
        currentCashout=baseCashout;
        play=true;
    }
if(play)       
engine.placeBet(currentBet*100,  Math.round(currentCashout*100));


});
