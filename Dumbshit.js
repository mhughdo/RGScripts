var baseBet=1;// Change thissssssssssssss
var baseCashout = 2;
var currentBet=baseBet ;
var currentCashout = baseCashout;
var lossStreak = 0;
var lossTotal=0;
//var cumulativeLoss=0;
//var winStreak=0;
var key=0;


engine.on('game_crash', function(data) {
	
	
	
	if(engine.lastGamePlay()=='LOST'){
      if (		currentBet==512)
      {
		currentBet=baseBet;
currentCashout=baseCashout;
      }
        
    currentBet*=2;
   currentCashout=2.2;
         
		
		
	}
	else  if  (engine.lastGamePlay()=='WON' ) {
		
	

   

}

var thing = engine.getEngine();
         var winCnt=0;
         var lossCnt=0;
        // var act=false;
         for (let i=0;i<10;i++)
         {
          if ( thing.tableHistory[i].game_crash/100>=1.97)
          {
            winCnt++;
          }
          else lossCnt++; 

         }
         console.log("losscnt " + lossCnt +", wincnt : " + winCnt + ", key : " + key  +", bet " + currentBet );
         if ( (winCnt>=lossCnt)  )
    {
			engine.placeBet(currentBet*100,  Math.round(currentCashout*100));
		
    }

	
});
