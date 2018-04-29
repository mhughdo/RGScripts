var baseBet=3;
var baseCashout =5;
var currentBet=baseBet ;
var currentCashout = baseCashout;
var lossStreak = 0;
var key=0;
var act=false;
var totalLoss=baseBet;
var cc=0;
engine.on('game_starting', function(info) {
if (act==true)
{
  //  console.log(currentBet);
   var  bet=Math.floor(currentBet);
    
    bet=parseInt(bet);
   // console.log(bet)
   cc=0;
    engine.placeBet( bet*100,  Math.round(currentCashout*100));
}
	
});
engine.on('game_crash', function(data) {
  function check ()
  {
    var thing = engine.getEngine();
    for (let i=0;i<7;i++)
    {
        if ( thing.tableHistory[i].game_crash/100>5)
        {
           
            cc++;
            return;
        }
       
       
    
        
    }
  }
  check();

if (cc==0)
{
    currentBet=baseBet;
        totalLoss=baseBet;
}
    if (cc!=0)
   {
	
	if(engine.lastGamePlay()=='NOT_PLAYED')
		return;
  
	if(engine.lastGamePlay()=='LOST'){
     
      //  var totalLoss=3;
      //  var total=0;
       
         totalLoss*=1.1;
             currentBet= totalLoss;
           //  currentBet=Math.floor(currentBet);
     // total+= currentBet;
           //  console.log(currentBet)
            
             currentCashout=5;
             
        
       // console.log(total)
	}
	else if  (engine.lastGamePlay()=='WON' )   { 
        cc=0;
        currentBet=baseBet;
        totalLoss=baseBet;
        currentCashout=baseCashout;
    
 }

}
      

});
