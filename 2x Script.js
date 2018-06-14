var baseBet=1;// Change thissssssssssssss
var maxLosses=6;
var skipGames=2;
var baseCashout = 2;
var currentBet=baseBet ;
var currentCashout = baseCashout;
var lossStreak = 0;
var play=true;
var cnt=0;
var multi=[1.08,1.25,1.28,1.31,1.33,1.35,1.35,1.35,1.35,1.35];
engine.on('game_starting', function(info) {
           

	
	
});

engine.on('game_crash', function(data) {
	
    if(engine.lastGamePlay()=='NOT_PLAYED'&& lossStreak!=0)
    {
        cnt++;
        if (cnt==skipGames)
        {
            cnt=0;
            play=true;
        }
    }
        

	
	if(engine.lastGamePlay()=='LOST'){
        play=false;
 lossStreak++;
 if (lossStreak==maxLosses) engine.stop();
 currentBet*=4;
 currentCashout=multi[lossStreak];

         
		
		
	}
    else if (engine.lastGamePlay()=="WON")
    {
        lossStreak=0;
        currentBet=baseBet;
        currentCashout=baseCashout;
        play=true;
    }
    console.log(cnt+" "+lossStreak+" "+ currentBet +" " + currentCashout);
    if(play)
    engine.placeBet(currentBet*100,  Math.round(currentCashout*100));

});
