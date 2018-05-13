


var _ignore = [
    "!kill", /* Joking313 scripts. */
    "!cashout", "!stop", "!stopafterwin", "!chase.start", "!chase.stop", /* CustomizableBot. */
    "!sounds.win:on", "!sounds.win:off", "!sounds.lose:on", "!sounds.lose:off", "!sounds.mention:on", "!sounds.mention:off"
     /* SoundAlerts. */
];
engine.on("msg", function (data) {
    var gap=false;
var gapmax=false;
    if (data.channelName === 'serbian')
    {
if (data.username == "livswild12")
{
 if (data.message.startsWith("!mute") ) {
           var res = data.message.replace("!mute","");
engine.chat("/mute"+res);
        }
else if (data.message.startsWith("!unmute") ) {
           var res = data.message.replace("!unmute","");
engine.chat("/unmute"+res); }

}
    if (data.message) {
        var message = data.message.toLowerCase();
        if (data.username == _scriptUsername) {
            if (message == "!stop") {
                cacheResults();
              
                engine.stop();
                return;
            }
            else if (message == "!clearhistory") {
                clearCachedResults();
               
                engine.stop();
                return;
            }
        }
        if (message == "!help") {
            say("Work in process....");
            //say(" News : !bust and !streak command changed .Example : !bust 5<1000 , 5 is Totalgames, 1000 is Targetnumber .Have fun :P ");
         
        }
      
        else if (message == "!donate") {
            say(" xrb_35ykxd8nh139qkh4d1qaodgw11js3u64uaj86ziu8hzrnimayg735qyiz6p6. Thanks :P ");
        } 
        else if (message == "!tip") {
          say(" xrb_35ykxd8nh139qkh4d1qaodgw11js3u64uaj86ziu8hzrnimayg735qyiz6p6. Thanks :P ");
          
        } 
        else if (message.startsWith("!prb joking125") || message.startsWith("!prob joking125") || message.startsWith("!probability joking125")) {
         
        }
        else if (message.startsWith("!prb joking4") || message.startsWith("!prob joking4") || message.startsWith("!probability joking4")) {
       
        }
        else if (message.startsWith("!prb") || message.startsWith("!prob") || message.startsWith("!probability")) {
          
        }
  else if (message.startsWith("!mute") || message.startsWith("!unmute")  || message.startsWith("!pattern")) 
	   {
 
	   }
        else if (!_caughtUp) {
            /* Script isn't ready to respond to the requests below yet. */
            return;
        }
        
        
        else if (message.startsWith("!n") || message.startsWith("!nyan")) {
            if (data.message.length>2)
            {
            let result = data.message.match(/\d+/g).map(n => parseInt(n));
            nyan(result[0]);
          //  console.log(result.length);
            }
            else 
         {
             nyan(1);
         }
        }
        else if (message.startsWith("!count ")|| message.startsWith("!c ") ) {
            var operat;
           
            var regex = /[+-]?\d+(\.\d+)?/g;
              var result = data.message.match(regex).map(function(v) { return parseFloat(v); });
            var res = data.message.match(/>/g);
            var res1= data.message.match(/</g);
            var na = data.message.replace("!count","");
           na1=na.match(/n/g);
        
        if ( (res == null && res1==null) || (res!= null) )
        {
            operat=">";
        }
        else 
        {
         operat="<";
        }
           //  let result = data.message.match(/\d+/g).map(n => parseFloat(n));

            
           if (na1!= null)
           {
            if (result.length==1)
            {
               say( count(operat,1000,result[0],1) ); 
            }
            else if (result.length==2)
            {
                 say (count(operat,1000,1000,2)); 
            }
            else
            {
                var responeTex="Number of Nyan " +  " in " ;
                for (let i=0;i<result.length;i++)
                {
                    if (i== (result.length-1))
                    {
                        responeTex+= result[i] +" " ;
                    }
                    else 
                    {
                               responeTex+= result[i] +", ";
                    }
                }
                responeTex+= " games : ";
                for (let i=0;i<result.length;i++)
                {
                    if (i== (result.length-1))
                    {
                        responeTex+= count(operat,1000,result[i],result.length)+" ";
                    }
                    else 
                    {
                    responeTex+= count(operat,1000,result[i],result.length)+", ";
                    }
                }
                say(responeTex);
            }
           }
           else 
           {
            if (result.length==1)
            {
                
                
                    say(count(operat,result[0],1000,1)); 
                
            }
            else  if (result.length==2)
            {
                
                

                
                  say (count(operat,result[0],result[1],2));
                
            }
            else 
            {
                var responeTex="Number of games " + operat + result[0] + " in " ;
                for (let i=1;i<result.length;i++)
                {
                    if (i== (result.length-1))
                    {
                        responeTex+= result[i] +" " ;
                    }
                    else 
                    {
                               responeTex+= result[i] +", ";
                    }
                }
                responeTex+= " games : ";
                for (let i=1;i<result.length;i++)
                {
                    if (i== (result.length-1))
                    {
                        responeTex+= count(operat,result[0],result[i],result.length)+" ";
                    }
                    else 
                    {
                    responeTex+= count(operat,result[0],result[i],result.length)+", ";
                    }
                }
                say(responeTex);
                        
            }
           } /*
              if (result.length==1)
              {
                  
                  
                      count(operat,result[0],1000); 
                  
              }
              else 
              {
                  
                  

                  
                    count(operat,result[0],result[1]);
                  
              }
            */
        }

        
 else if (message.startsWith("!streak")) {
            var operat;
            var regex = /[+-]?\d+(\.\d+)?/g;
           
          //  var str = '<tag value="abc hd <1.25 2 " value1="-12.334" />';
            var result = data.message.match(regex).map(function(v) { return parseFloat(v); });
           //
           // console.log(result.length);
        //    console.log(floats);
                   var res = data.message.match(/>/g);
                var res1= data.message.match(/</g);
               if ( (res == null && res1==null) || (res1!= null) )
               {
                   operat="<";
               }
               else 
               {
                operat=">";
               }
                   // let result = data.message.match(/\d+/g).map(n => parseFloat(n));
                     if (result.length==1)
                     {
                              streak(0,operat,result[0]);
                     }
                     else  if (result.length==2)
                     {
                         streak(result[0],operat,result[1]);
                     }
                     else 
                     {
                         customStreak(result[0],operat,result[1],result[2]);
                     }
                    }

        else if (message.startsWith("!med") || message.startsWith("!median")) {
          //  processByLength(message, median);
        }
        else if (message.startsWith("!mean") || message.startsWith("!avg") || message.startsWith("!average")) {
         //   processByLength(message, average);
        }
        else if (message.startsWith("!mode")) {
          //  processByLength(message, mode);
        }
        else if (message.startsWith("!min") || message.startsWith("!minimum")) {
            //processByLength(message, min);
        }
        else if (message.startsWith("!max") )  {
           // processByLength(message, max);
        }
        else if (message.startsWith("!bst joking125") || message.startsWith("!bust joking125")) {
           // processJoking(message, jokingBust125);
        }
        else if (message.startsWith("!bst joking4") || message.startsWith("!bust joking4")||message.startsWith("!gap joking")) {
           // processJoking(message, jokingBust4);
        }
        else if (message.startsWith("!gapmax") ) {
            var operat;
            gapmax=true;
            var wwtk=data.message.match(/x/g);
            gap=false;
            var res = data.message.match(/>/g);
         var res1= data.message.match(/</g);
        if ( (res == null && res1==null) || (res!= null) )
        {
            operat=">";
        }
        else 
        {
         operat="<";
        }
        var regex = /[+-]?\d+(\.\d+)?/g;
        var result = data.message.match(regex).map(function(v) { return parseFloat(v); });
        if (wwtk!=null)
        {
           if (result.length==1)
           {
                    bust(result[0],operat,1,gap,gapmax);
           }
           else 
           {
              bust(result[1],operat,result[0],gap,gapmax);
           }
        }
        else {
         if (result.length==1)
         {
                  bust(1,operat,result[0],gap,gapmax);
         }
         else 
         {
            bust(result[0],operat,result[1],gap,gapmax);
         }
       }
        }
        else if (message.startsWith("!gap") ) {
            var operat;
            gap=true;
            var wwtk=data.message.match(/x/g);
            var res = data.message.match(/>/g);
         var res1= data.message.match(/</g);
        if ( (res == null && res1==null) || (res!= null) )
        {
            operat=">";
        }
        else 
        {
         operat="<";
        }
        var regex = /[+-]?\d+(\.\d+)?/g;
        var result = data.message.match(regex).map(function(v) { return parseFloat(v); });
        if (wwtk!=null)
        {
           if (result.length==1)
           {
                    bust(result[0],operat,1,gap,gapmax);
           }
           else 
           {
              bust(result[1],operat,result[0],gap,gapmax);
           }
        }
        else {
         if (result.length==1)
         {
                  bust(1,operat,result[0],gap,gapmax);
         }
         else 
         {
            bust(result[0],operat,result[1],gap,gapmax);
         }
       }
        } 
        
        else if ((message.startsWith("!")&& message.length>1) ||message.startsWith("!bst") || message.startsWith("!bust") || message.startsWith("!0") ) {
            var operat;
            gap=false;
            var regex = /[+-]?\d+(\.\d+)?/g;

            //  var str = '<tag value="abc hd <1.25 2 " value1="-12.334" />';
              var result = data.message.match(regex).map(function(v) { return parseFloat(v); });
            var res = data.message.match(/>/g);
            var wwtk=data.message.match(/x/g);
            var res1= data.message.match(/</g);
          
        
        if ( (res == null && res1==null) || (res!= null) )
        {
            operat=">";
        }
        else 
        {
         operat="<";
        }
           //  let result = data.message.match(/\d+/g).map(n => parseFloat(n));
             if (wwtk!=null)
             {
                if (result.length==1)
                {
                         bust(result[0],operat,1,gap,gapmax);
                }
                else 
                {
                   bust(result[1],operat,result[0],gap,gapmax);
                }
             }
             else {
              if (result.length==1)
              {
                       bust(1,operat,result[0],gap,gapmax);
              }
              else 
              {
                 bust(result[0],operat,result[1],gap,gapmax);
              }
            }
        }
       
                   

        }
        else if (message.startsWith("!") && _ignore.indexOf(message) == -1) {
            say("Weird .Use !help to view all the commands ");
        }
    }

});

/*==================================
 Request processing.
===================================*/




/*==================================
 Calculations for requests.
===================================*/

function count(operat , target,len,lenr)
{
    var results=[];
    var resultsid=[];
    var j=0;
    var responseText="";
    var cout=0;
    if (target==0)
    {
        for(let i=0;i<len;i++)
      {
              if (_games[i].bust==target)
              {
                   cout++;
                  results[j]=_games[i].bust;
                  resultsid[j]=_games[0].id-_games[i].id;
                  j++;
              }
             
      }
    }
    else 
    {
    if (operat==">" )
    {
        
      for(let i=0;i<len;i++)
      {
              if (_games[i].bust>target)
              {
                  cout++;
                  results[j]=_games[i].bust;
                  resultsid[j]=_games[0].id-_games[i].id;
                  j++;
              }
              
      }

    }
   else if (operat=="<")
   {
    for(let i=0;i<len;i++)
    {
            if (_games[i].bust<target)
            {
                cout++;
                results[j]=_games[i].bust;
                resultsid[j]=_games[0].id-_games[i].id;
                j++;
            }
            
    }

   }
}

var _results=[],_j=0;
_results[_j]=results[0]; 
_j++;
var avggap=0;
var maxgap=0;

for (let i=0;i<results.length-1;i++)
{
_results[_j]=parseInt(Math.abs(resultsid[i]-resultsid[i+1]));
_j++;
}

for (let i=1;i<_j;i++)
{
if ( _results[i]>maxgap)
{
    maxgap=_results[i];
}
avggap+= _results[i];
}
avggap=avggap/_j;
//console.log(avggap);
avggap=avggap.toFixed(2);
//console.log(avggap);

if ( target==0)
{

    return responseText+="Number of games " + "=" + target +" in " + len +" games : "+ cout  +". Longest gap : " + (maxgap-1) +". Current : " +resultsid[0] +  " games ago  "+ "(" +results[0]+"x )"  +" , Avg gap : " + avggap +" games "  ;
//responseText+="Number of games = " + target +" in " + len +" games : "+ cout  +". Longest gap : " + (maxgap-1) + ",Most common gap : "+ (mostcommonAvg-1) + "( " + mostCommonlength +" times )"+  ", Avg gap : " + avggap +" games " ;
}
else 
{
    if (lenr>2)
    {
        return cout+"( " + (maxgap-1) +" )";
    }
    
       return  responseText+="Number of games " + operat + target +" in " + len +" games : "+ cout  +". Longest gap : " + (maxgap-1) +". Current : " +resultsid[0] +  " games ago  "+ "(" +results[0]+"x )"  +" , Avg gap : " + avggap +" games "  ;
   
   // responseText+="Number of games " + operat + target +" in " + len +" games : "+ cout  +". Longest gap : " + (maxgap-1) +",Most common gap : "+ (mostcommonAvg-1) + "( " + mostCommonlength +" times )"+   ". Current : " +resultsid[0] +  " games ago  "+ "(" +results[0]+"x )"  +" , Avg gap : " + avggap +" games "  ;
    
}
//say(responseText);

}
function nyan(num)
                {
                    var results=[];
                    var resultsid=[];
                    var j=0;
                    var responseText="";
                      for(let i=0;i<_games.length;i++)
                      {
                              if (_games[i].bust>1000)
                              {
                                  results[j]=_games[i].bust;
                                  resultsid[j]=_games[0].id-_games[i].id;
                                  j++;
                              }
                              if (j==num)
                              {
                                  break;
                              }
                      }
                      if (num==1)
                      {
                        responseText+=  (resultsid[0]) + " games ago "+"("+ results[0] +"x"+")"+". " +"https://ethcrash.io/game/"+(_games[0].id-resultsid[0]);
                       var time= GetTime((_games[0].id-resultsid[0]));
                      
                        say("Meow Meow : " + responseText +"  (" + time + ")");
                    }
                      else 
                      {
                          var co=0;
                          var responseText2="";
                          var responseText3="";
                      for (let i=0;i<num;i++)
                      {
                         
                     if (i==num)
                     {
                           responseText+= (resultsid[i])+" games ago "+"("+  results[i] +"x"+")"+". "; }
                           else 
                           {
                            responseText+=  (resultsid[i])+" games ago "+"("+  results[i]+"x" +")"+", ";
                           }
                          
                      if(responseText.length >470&& co==0  )
                      {
                          co++;
                           responseText2+=responseText;
                          responseText="";
                      }
                      if (responseText.length >470 && co==1)
                      {
                        co++;
                         responseText3+=responseText;
                        responseText="";
                      }
                      
                    }
                    if (co==1)
                    {
                    say("Meow Meow : " + responseText2);
                    setTimeout(function(){ say(responseText); }, 500);
                    
                    }
                    else if (co>1)
                    {
                        say("Meow Meow : " + responseText2);
                        setTimeout(function(){ say(responseText3); }, 500);
                        setTimeout(function(){ say(responseText); }, 500);
                        
                    }
                    else 
                    {
                        say("Meow Meow : " + responseText);
                    }
                }
                }
            function streak(max_sequence,operat,num)

                {
                    
                   
                   // console.log(max_sequence+" "+ operat+" "+ " "+ num);
                    var  results=[];
                    var j=0; 
                    var count;
                   var start;
                    var responseText="";
                        var sequence_count = 0;
                        
                        if (operat=="<" && max_sequence!=0)
                        {
                            var max_sequence1=max_sequence;
                        for(var  i = 0; i<_games.length ;i++) {
                          
                            
                            if (_games[i].bust < num ) {
                               
                                 results[j]=_games[i].bust;
                                 j++;
                                 sequence_count++; 
                                
                                  if (sequence_count == max_sequence1) {
                                    start=j;
                                    count=i;
                                  
                                  // max_sequence = sequence_count;
                                  break;
                                  
                                  
                                   
                                  }
                                }
                             else {
                                sequence_count = 0;
                               
                                     } 
                             
                                    }
                                
                                                               
                                
                            }
                            else if (operat=="<" && max_sequence==0)
                            {
                                var max_sequence1=max_sequence;
                                for(var  i = 0; i<_games.length ;i++) {
                          
                            
                                    if (_games[i].bust < num ) {
                                       
                                         results[j]=_games[i].bust;
                                         j++;
                                         sequence_count++; 
                                        
                                          if (sequence_count > max_sequence1) {
                                            start=j;
                                            count=i;
                                          
                                           max_sequence1 = sequence_count;
                                         // break;
                                          
                                          
                                           
                                          }
                                        }
                                     else {
                                        sequence_count = 0;
                                       
                                             } 
                                     
                                            }
                                        
                            }
                            else if (operat==">" && max_sequence==0)
                            {
                                var max_sequence1=max_sequence;
                                for(var  i = 0; i<_games.length ;i++) {
                          
                            
                                    if (_games[i].bust > num ) {
                                       
                                         results[j]=_games[i].bust;
                                         j++;
                                         sequence_count++; 
                                        
                                          if (sequence_count > max_sequence1) {
                                            start=j;
                                            count=i;
                                          
                                           max_sequence1 = sequence_count;
                                         // break;
                                          
                                          
                                           
                                          }
                                        }
                                     else {
                                        sequence_count = 0;
                                       
                                             } 
                                     
                                            }
                                        
                            }
                          else  if (operat==">" && max_sequence!=0)
                            {
                                var max_sequence1=max_sequence;
                            for(var  i = 0; i<_games.length ;i++) {
                              
                                
                                if (_games[i].bust > num ) {
                                   
                                     results[j]=_games[i].bust;
                                     j++;
                                     sequence_count++; 
                                    
                                      if (sequence_count == max_sequence1) {
                                        start=j;
                                        count=i;
                                      
                                      // max_sequence = sequence_count;
                                      break;
                                      
                                      
                                       
                                      }
                                    }
                                 else {
                                    sequence_count = 0;
                                   
                                         } 
                                 
                                        }
                                    }
                   //  console.log(start);
                   var ct=0;
                        for (var i=start-1;i>=start-max_sequence1;i--)
                        {
                            ct++;
                            if(i==start-max_sequence1)
                            {
                            responseText+= results[i]+" ";
                            }
                            else  {responseText+= results[i]+", "; }
                            if (ct==6)
                            {
                                
                                responseText+= "...";
                                break;
                            }
                          
    

                            }
                            var m=count-max_sequence1+1;
                            if (start==undefined)
                           { say ("Weird , Never seen") }

                            else {say("Seen : " + max_sequence1 +" games   , " + m  +" games ago: " + " "+ responseText); }
                }
                function customStreak(max_sequence,operat,num,len)
                {
                              


//console.log(max_sequence+ " " + num+" " +len);
	var sequence_count=0;
	var start=0;
	var index=[];
    var x=0;
   for (let i=0;i<100000;i++)
   {
       index[i]=0;
   }
    var responeText="";

		for (var m=0;m<len;m++)
		{
                                for(var  i = 0+start; i<_games.length;i++) {
                          
                            
                                    if (_games[i].bust < num ) {
                                      
                                         sequence_count++; 
                                        
                                          if (sequence_count ==max_sequence) {
                                            //  console.log(start);
                                            start=i;
                                          
                                          if (start>index[x] )
                                          	{
                                          		index[x]=start;
                                          x++;
											  }
                                          
                                           max_sequence = sequence_count;
                                        break;
                                          
                                          
                                           
                                          }
                                        }
                                     else {
                                        sequence_count = 0;
                                       
                                             } 
                                     
                                            }
                                            }
                        
	
	 var ct=0;
	 for (var k=0;k<x;k++)
	 {
        
     responeText+= "Seen   " + (index[k]+1 ) +" games ago : " +"(" ; 
       for (var g=index[k];g>(index[k]-max_sequence);g--)
       {
           ct++;
           if (g==(index[k]-max_sequence-1))
           {
            responeText+=_games[g].bust+" ";
           }
           else 
           {
                 responeText+=_games[g].bust+", ";
           }
           if (ct==6)
           {
               ct=0;
               responeText+= "...";
               break;
           }
       }
       if (k==(x-1))
       {
        responeText+=") ";
       }
       else 
       {responeText+=") "+" ;"; }
          
     }
     say(responeText);
	 
	

                }
            function bust(num,operat,target,gap,gapmax)
            {
                var results=[];
                var resultsid=[];
                var j=0;
                var responseText="";
                if (target==0)
                {
                    for(let i=0;i<_games.length;i++)
                  {
                          if (_games[i].bust==target)
                          {
                              results[j]=_games[i].bust;
                              resultsid[j]=_games[0].id-_games[i].id;
                              j++;
                          }
                          if (gapmax==false)
                          {
                          if (j==num)
                          {
                              break;
                          }
                        }
                  }
                }
                else 
                {
                if (operat==">" )
                {
                    
                  for(let i=0;i<_games.length;i++)
                  {
                          if (_games[i].bust>target)
                          {
                              results[j]=_games[i].bust;
                              resultsid[j]=_games[0].id-_games[i].id;
                              j++;
                          }
                          if (gapmax==false)
                          {
                          if (j==num)
                          {
                              break;
                          }
                        }
                  }

                }
               else if (operat=="<")
               {
                for(let i=0;i<_games.length;i++)
                {
                        if (_games[i].bust<target)
                        {
                            results[j]=_games[i].bust;
                            resultsid[j]=_games[0].id-_games[i].id;
                            j++;
                        }
                        if (gapmax==false)
                        {
                        if (j==num)
                        {
                            break;
                        }
                    }
                }

               }
            }
            if (gap==false&& gapmax==false )
           {
                  if (num==1)
                  {
                    var time1=GetTime(_games[0].id-resultsid[0]);
                      if (target==0)
                      {

                    responseText+= (resultsid[0]) + " games ago "+"#"+  results[0] +"x" +"( " + time1 +" )" ;
                    say("Seen " + target+ ": " + responseText);
                      }
                      else 
                      {
                        responseText+= (resultsid[0]) + " games ago "+"#"+  results[0] +"x" +"( " + time1 +" )" ;
                        if (operat==">")
                        {
                            say("Seen > " +target +": "   + responseText);
                        }
                        else 
                        {
                            say("Seen < " +target +": "   + responseText);
                        }
                       
                      }
                }
                  else 
                  {
                  for (let i=0;i<num;i++)
                  {
                     
                 if (i==num)
                 {
                       responseText+= (resultsid[i])+" games ago "+ "#"+  results[i] +"x" +". "; }
                       else 
                       {
                        responseText+= (resultsid[i])+" games ago " + "#"+ results[i] +"x"  +", ";
                       }
                  
                  
                }
                if (target==0)
                      {
                        say("Seen " + target+ ": " + responseText); 
                      }
               else 
               {
                if (operat==">")
                {
                    say("Seen > " +target +": "   + responseText);
                }
                else 
                {
                    say("Seen < " +target +": "   + responseText);
                }
                
               }
            /*    if (operat==">")
                {
                    say("Seen > " +target +": "   + responseText);
                }
                else 
                {
                    say("Seen < " +target +": "   + responseText);
                } */ 
                
            }
        }
        else  if (gap==true)
        {
            var co=0;
var responseText2="";
var responseText3="";

            var _results=[],_j=0;
_results[_j]=results[0]; 
_j++;
for (let i=0;i<results.length-1;i++)
{
 _results[_j]=parseInt(Math.abs(resultsid[i]-resultsid[i+1]));
 //console.log(_results[_j]+" ");
 _j++;
}
responseText+="Current ( " + (_results[0]-1) + "x) : " + (resultsid[0]+1) +" games ago. " + ",  " ;
for (let i=1;i<_j;i++)
{
 if (i!=_j-1)
 {
     
    responseText+= (_results[i]-1)+" games , ";
 }
 else 
 {
    responseText+= (_results[i]-1)+" games , ";
 }
    if(responseText.length >470&& co==0  )
{
co++;
responseText2+=responseText;
responseText="";
}
if (responseText.length >470 && co==1)
{
co++;
responseText3+=responseText;
responseText="";
}
}




if (co==1)
{
say( responseText2);
setTimeout(function(){ say(responseText); }, 500);

}
else if (co>1)
{
say( responseText2);
setTimeout(function(){ say(responseText3); }, 500);
setTimeout(function(){ say(responseText); }, 500);

}
else 
{
say( responseText);
}
              
//say(responseText);
        }
        else if (gapmax==true)
        {
            
            var co=0;
            var responseText2="";
            var responseText3="";
            
                        var _results=[],_j=0;
            _results[_j]=results[0]; 
            _j++;
            for (let i=0;i<results.length-1;i++)
            {
             _results[_j]=parseInt(Math.abs(resultsid[i]-resultsid[i+1]));
             //console.log(_results[_j]+" ");
             _j++;
            }
            for (let i=1;i<_j;i++)
            {
                for (let j=i+1;j<_j;j++)
                {
                    if (_results[i]<_results[j])
                    {
                      var tempr=_results[i];
                      _results[i]=_results[j];
                      _results[j]=tempr;
                    }
                }
            }
            //responseText+="Current ( " + (_results[0]-1) + "x)  : " + (resultsid[0]+1) +" games ago. " + "  " ;
            var ct3=0;
            for (let i=1;i<_j;i++)
            {
                if (i!=_j-1)
             {
                responseText+= (_results[i]-1)+" games , ";
             }
             else 
             {
                responseText+= (_results[i]-1)+" games  ";
             }
                ct3++;
                if(responseText.length >470&& co==0  )
            {
            co++;
            responseText2+=responseText;
            responseText="";
            }
            if (responseText.length >470 && co==1)
            {
            co++;
            responseText3+=responseText;
            responseText="";
            }
            if (ct3==num)
            {
                break;
            }
            }
            
            
            
            
            if (co==1)
            {
            say( responseText2);
            setTimeout(function(){ say(responseText); }, 500);
            
            }
            else if (co>1)
            {
            say( responseText2);
            setTimeout(function(){ say(responseText3); }, 500);
            setTimeout(function(){ say(responseText); }, 500);
            
            }
            else 
            {
            say( responseText);
            }
                          
        }
        

}


function GetTime(id)
{
    var res1="";
   // var id=11159868;
    var tex= 'https://raigames.io/game/' + id;
    //var y = document.querySelectorAll("small[href=tex]");
    //console.log(y[0].innerText);
    //console.log(tex);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         
        var xmlDoc = xhttp.responseText;
    var tagIndex= xmlDoc.indexOf("<small>");
            var timeIndex = xmlDoc.indexOf("<small>", tagIndex) + 7;
           var  res = xmlDoc.substring(timeIndex, xmlDoc.indexOf("</small>", timeIndex));
          // console.log(res);
           res1= res;
        
        }
    };
    xhttp.open("GET", tex, false);
    xhttp.send();
      return res1;
}


/*==================================
 Games management.
===================================*/

var _caughtUp = false;
var _game;
var _games = getCachedResults();
var _nyan;

engine.on("game_crash", function (data) {
    if (_game) {
        _game.bust = data.game_crash / 100.0;
        if (_games[0].id < (_game.id - 1)) {
            /* If this is the first run in a while, this could take a few seconds.
               If most games are already cached, this should be quick. */
            var missing = [_game];
            var lastHash = data.hash;
            for (var id = _game.id - 1; id > _games[0].id; id--) {
                var gameHash = genGameHash(lastHash);
                var gameCrash = crashPointFromHash(gameHash);

                var current = {};
                current.id = id;
                current.bust = gameCrash;
                missing.push(current);

                lastHash = gameHash;
            }
            _games = concatArrays(missing, _games);
            if (_games[0].id == _game.id) {
                _caughtUp = true;
                cacheResults();
                console.log("Script ready. Ask me anything.");
            }
        }
        else {
            _games.unshift(_game);
            if (!_caughtUp) {
                _caughtUp = true;
                cacheResults();
                console.log("Script ready. Ask me anything.");
            }
        }

        if (_game.bust >= 1000.00) {
            _nyan = {
                id: _game.id,
                time: utcDate()
            };
            localStorage.setItem("nyan", JSON.stringify(_nyan));
        }
        else if (_game.bust >= 900.00) {
           // say("Nyan'egg : P ");
        }
        else if (_game.bust == 0.00) {
            say("Aaaaaa");
        }
    }
});
engine.on("game_starting", function (data) {
    _game = {};
    _game.id = data.game_id;
});

/*==================================
 Snark.
===================================*/



/*==================================
 General-use variables.
===================================*/

var _scriptUsername = engine.getUsername();

/*==================================
 Cache management.
===================================*/

var _maxServerCache;

function getCachedResults() {
    var cached = [];

    /* Pull remotely-stored results. */
    var csv = new XMLHttpRequest();
    csv.open("GET", "https://corecompetency.github.io/RaiGamesScripts/Results.csv", false); /* Block, don't do this asynchronously. */
    csv.send(null);
    var lines = csv.responseText.split("\n").filter(function (ii) { return ii; });
    for (var ii = 0; ii < lines.length; ii++) {
        var line = lines[ii].split(",");
        var record = {};
        record.id = line[0];
        record.bust = line[1];
        cached.push(record);
    }
    console.log("Pulled " + lines.length + " games from remote server.");
    
    _maxServerCache = cached[0].id;

    /* Pull locally-stored results. */
    var local = JSON.parse(localStorage.getItem("games"));
    if (local) {
        var length = local[0].id - cached[0].id;
        local = local.slice(0, length); /* Only pull the missing games.  This handles the case where the remote server cache is updated. */
        concatArrays(local, cached);
    }
    console.log("Pulled " + (local ? local.length : 0) + " games from localStorage.");

    return cached;
}

function cacheResults() {
    var slice = _games.slice(0, _games[0].id - _maxServerCache);
    localStorage.setItem("games", JSON.stringify(slice));
    console.log("Cached " + slice.length + " games in localStorage.");
}

function clearCachedResults() {
    localStorage.removeItem("games");
    console.log("Removed games from localStorage.");
}

/*==================================
 Data creation.
===================================*/

loadScript("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/sha256.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/hmac.js");

function genGameHash(serverSeed) {
    return CryptoJS.SHA256(serverSeed).toString();
};

function crashPointFromHash(serverSeed) {
    var hash = hmac(serverSeed, "0x8039f1f45f2df637488cbdbb3f2eb86615a10fe96a7ce79f721355035f3adb59");

    /* In 1 of 101 games the game crashes instantly. */
    if (divisible(hash, 101)) {
        return 0;
    }

    /* Use the most significant 52-bit from the hash to calculate the crash point. */
    var h = parseInt(hash.slice(0, 52 / 4), 16);
    var e = Math.pow(2, 52);
    return (Math.floor((100 * e - h) / (e - h)) / 100).toFixed(2);
};

function hmac(key, v) {
    var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    return hmacHasher.finalize(v).toString();
}

function divisible(hash, mod) {
    var val = 0;
    var o = hash.length % 4;
    for (var i = o > 0 ? o - 4 : 0; i < hash.length; i += 4) {
        val = ((val << 16) + parseInt(hash.substring(i, i + 4), 16)) % mod;
    }
    return val === 0;
}

/*==================================
 Helper functions.
===================================*/

function loadScript(url) {
    var script = document.createElement("script")
    script.type = "text/javascript";

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function concatArrays(first, second) {
    var result = new Array(first.length + second.length);
    var secondStart = first.length;
    for (var ii = 0; ii < first.length; ii++) {
        result[ii] = first[ii];
    }
    for (var ii = 0; ii < second.length; ii++) {
        result[ii + secondStart] = second[ii];
    }
    return result;
}

function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}



function utcDate() {
    var utc = new Date();
    return new Date().setMinutes(utc.getMinutes() + utc.getTimezoneOffset());
}



function say(message) {
    
    if (message.length > 499) {
        message = message.slice(0, 496) + '...';
        engine.chat(message);
     
    }
    else {
        engine.chat(message);
    }
}
