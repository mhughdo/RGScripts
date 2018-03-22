
var timing=false ;


engine.on('player_bet', function (data) { 
 var thing = engine.getEngine();
 //~~~~~~~~~~~~~~~~~~~~~~~Case 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      for (let i=0;i<6;i++)
      {
        if (thing.tableHistory[5].game_crash/100 <1.1)
        {
              for (let i=0;i<5;i++)
      {
         if (thing.tableHistory[i].game_crash/100 <1.1)
         {
                  timing=true;
         }
      }
        }
      }
       //~~~~~~~~~~~~~~~~~~~~~~~Case 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      
             if (thing.tableHistory[5].game_crash/100 >1.1)
        {
               for (let i=0;i<5;i++)
               {
                if (thing.tableHistory[i].game_crash/100 <2)
        {
          timing=false;
                     break;
        }
        else {timing=true};
                    
               }
        }
      

      /*
       //~~~~~~~~~~~~~~~~~~~~~~~Case 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      for (let i=0;i<4;i++)
      {
if (thing.tableHistory[3].game_crash/100 <1.1)
        {
          check++;
        }
      for (let i=0;i<3;i++)
      {
            if (thing.tableHistory[i].game_crash/100 <1.1)
            {
              check++;
            }
      }
    }
      if (check==1)
      {
        timing=true;
      } */ 
 if (timing==true) {
  timing=false;
  check=0;
  check1=0;
  var allin = parseInt(engine.getBalance()/100);
  engine.placeBet(allin*100,  Math.round(1.09*100));
 }
}); 







