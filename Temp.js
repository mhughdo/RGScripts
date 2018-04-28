






var baseBet=1;// Change thissssssssssssss
var baseCashout =2;
var currentBet=baseBet ;
var currentCashout = baseCashout;
var lossStreak = 0;
//var cumulativeLoss=0;
//var winStreak=0;
var key=0;
var _key=0;
var prvBet=0;
var prvCashout=0;

engine.on('game_starting', function(info) {
		      // console.log(key+" "+ _key);
         
/*
         var thing = engine.getEngine();
         var winCnt=0;
         var lossCnt=0;
        // var act=false;
         for (let i=0;i<20;i++)
         {
          if ( thing.tableHistory[i].game_crash/100>=2)
          {
            winCnt++;
          }
          else lossCnt++; 

         }
         console.log(lossCnt +" " + winCnt);
         if ( (winCnt>=lossCnt) || (lossCnt- winCnt)<=5  )
         {
			engine.placeBet(currentBet*100,  Math.round(currentCashout*100)); }
		*/

	
	
});
engine.on('game_crash', function(data) {
  


	
	//if(engine.lastGamePlay()=='NOT_PLAYED')
	//	return;
	
	if(engine.lastGamePlay()=='LOST'){

		
    if (_key==2)
    {    
      lossStreak++;
    currentBet=1;
   currentCashout=1;
         }  
	else if (key ==1 && _key==0)
  {
    //lossStreak++;
_key++;
currentBet=4;
currentCashout=2.2;


  }
  else if (key ==1 && _key==1)
  {
    //lossStreak++;
_key++;
currentBet=8;
currentCashout=2.2;


  }
  else if (key ==2 && _key==0)
  {
    //lossStreak++;
_key++;
currentBet=32;
currentCashout=2.2;


  }
  else if (key ==2 && _key==1)
  {
    //lossStreak++;
_key++;
currentBet=64;
currentCashout=2.2;


  }
  else if (key ==3&& _key==0)
  {
    //lossStreak++;
_key++;
currentBet=256;
currentCashout=2.2;


  }
  else if (key ==3 && _key==1)
  {
    //lossStreak++;
_key++;
currentBet=512;
currentCashout=2.2;


  }
  else 
  {
    lossStreak++;
    currentBet=1;
    currentCashout=1;
  }
  
		
		
	}
	else if  (engine.lastGamePlay()=='WON' )   { 
    var thing = engine.getEngine();
   var precr=thing.tableHistory[0].game_crash/100;
    var precr1=thing.tableHistory[1].game_crash/100;
   if (precr >2 )
   {
     if ( (lossStreak!=0 && key==0 ) || (lossStreak!=0 && key==1&&_key==2)   || (lossStreak!=0 && key==2&&_key==2)) 
       {
        key++;
        lossStreak=0;
       }
       if ( (key!=0  && precr1>2 && precr>=2.2 ) || (key!=0&& precr>=2.2 && currentBet!=1) ) 
       {
        key=0;
        _key=0;
        currentBet=baseBet;
currentCashout=baseCashout;

       }

       else  if (key==1 && _key==0)
       {
        currentBet=2;
        currentCashout=2.2;
       }
       else if (key==2 && _key==2)
       {
        currentBet=16;
        currentCashout=2.2;
        _key=0;
       }
       else if (key==3 && _key==2)
       {
        currentBet=128;
        currentCashout=2.2;
        _key=0;
       }
       else 
       {
        currentBet=baseBet;
        currentCashout=baseCashout;
       }
       

       
        
       


       
   }
    else if (precr<2 && lossStreak!=0)
   {
currentBet=1;
currentCashout=1;
    
   }
		
	

}
 var thing = engine.getEngine();
         var winCnt=0;
         var lossCnt=0;
        // var act=false;
         for (let i=0;i<10;i++)
         {
          if ( thing.tableHistory[i].game_crash/100>=2)
          {
            winCnt++;
          }
          else lossCnt++; 

         }
         console.log("losscnt " + lossCnt +", wincnt : " + winCnt + ", key : " + key +", _key : " + _key);
         if ( (winCnt>=lossCnt) || (lossCnt- winCnt)<=2  )
         {
      engine.placeBet(currentBet*1000,  Math.round(currentCashout*1000)); }
	
});
