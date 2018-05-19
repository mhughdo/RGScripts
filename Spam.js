engine.on("msg", function (data) {
if (data.channelName === 'spam')
    {
if (data.username == "QuantumAbacus" || data.username == "-DarkSoul-"  )
{
 setTimeout(function(){ engine.chat("@"+data.username +": Shut up , Please!" ); }, 500);

}

}
});

var baseBet=1;// Change thissssssssssssss
var baseCashout = 2;
var currentBet=baseBet ;
var currentCashout = baseCashout;
var lossStreak = 0;
var lossTotal=0;
//var cumulativeLoss=0;
//var winStreak=0;
var key=0;
engine.on('game_starting', function(info) {
   
	
	
});

engine.on('game_crash', function(data) {
	
	
	
	if(engine.lastGamePlay()=='LOST'){
        if (currentBet!=1 && currentCashout!=1 )
        { 
    lossTotal+= currentBet;
             }

		lossStreak++;
	
        
    currentBet=1;
   currentCashout=1;
         
		
		
	}
	else  if  (engine.lastGamePlay()=='WON' ) {
		
	
			var thing = engine.getEngine();
   var precr=thing.tableHistory[0].game_crash/100;
   var precr1=thing.tableHistory[1].game_crash/100;
  // console.log(precr+" " + precr1);
   if (precr>2)
   {
    if (lossTotal <= currentBet)
    {
      lossTotal=0;
      }
   	console.log(lossStreak + " " + key);
       if (lossStreak!=0)
       {
       	key++;
       	lossStreak=0;
       }
       if (key!=0  && precr1>2 && precr>= 2.2  && lossTotal==0) 
       {
           key=0;
           currentBet=baseBet;
           currentCashout=baseCashout
           
          

       }
       else if (key==1)
       {
       	currentBet=2;
       	currentCashout=2.2;
       }

       else if (key==2)
       {
       	currentBet=4;
       	currentCashout=2.2;
       }
       else if (key==3)
       {
       	currentBet=8;
       	currentCashout=2.2;
       }
       else if (key==4)
       {
       	currentBet=16;
       	currentCashout=2.2;
       }
       else if (key==5)
       {
       	currentBet=32;
       	currentCashout=2.2;
       }
       else if (key==6)
       {
       	currentBet=64;
       	currentCashout=2.2;
       }
       else if (key==7)
       {
       	currentBet=128;
       	currentCashout=2.2;
       }
       else if (key==8)
       {
       	currentBet=256;
       	currentCashout=2.2;
       }
       else if (key==9)
       {
       	currentBet=512;
       	currentCashout=2.2;
       }
       else if (key==10)
       {
       	currentBet=1024;
       	currentCashout=2.2;
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
