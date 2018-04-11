

var _ignore = [
    "!kill", /* Joking313 scripts. */
    "!cashout", "!stop", "!stopafterwin", "!chase.start", "!chase.stop", /* CustomizableBot. */
    "!sounds.win:on", "!sounds.win:off", "!sounds.lose:on", "!sounds.lose:off", "!sounds.mention:on", "!sounds.mention:off" /* SoundAlerts. */
];
engine.on("msg", function (data) {
    var gap=false;

    if (data.channelName === 'serbian')
    {
    if (data.message) {
        var message = data.message.toLowerCase(); /* Easier for downstream processing to do this in one place. */
        if (data.username == _scriptUsername) {
            if (message == "!stop") {
                cacheResults();
              //  say("Script shutting down.");
                engine.stop();
                return;
            }
            else if (message == "!clearhistory") {
                clearCachedResults();
               // say("Script shutting down.");
                engine.stop();
                return;
            }
        }
        if (message == "!help") {
            say("Work in process....");
            say(" News : !bust and !streak command changed .Example : !bust 5<1000 , 5 is Totalgames, 1000 is Targetnumber .Have fun :P ");
            //say("If you'd like to report a bug or submit a feature request, you can do so here:  https://github.com/CoreCompetency/RaiGamesScripts/issues");
        }
      
        else if (message == "!donate") {
            say(" xrb_35ykxd8nh139qkh4d1qaodgw11js3u64uaj86ziu8hzrnimayg735qyiz6p6. Thanks :P ");
        } 
        else if (message == "!tip") {
          say(" xrb_35ykxd8nh139qkh4d1qaodgw11js3u64uaj86ziu8hzrnimayg735qyiz6p6. Thanks :P ");
          
        } /*
        else if (message == "!script" || message == "!scripts") {
            say("Commonly-used, scripted strategies can be found here: https://github.com/Joking313/Scripts");
            say("If you'd like to create and test your own strategy, you can use this customizable script: https://github.com/CoreCompetency/RaiGamesScripts/blob/master/CustomizableBot.js");
            say("Remember that no script or strategy is expected to make money over time.  If you feel yourself becoming addicted to gambling, use the !helpline command to get the National Gambling Helpline phone number.");
        }
        else if (message.indexOf(_scriptUsername.toLowerCase()) > -1) {
            snark();
        }
        else if (data.username != _scriptUsername && message.indexOf("shiba") > -1) {
            shibaSnark();
        } */ 
        else if (message.startsWith("!prb joking125") || message.startsWith("!prob joking125") || message.startsWith("!probability joking125")) {
           // processJoking(message, jokingProbability125);
        }
        else if (message.startsWith("!prb joking4") || message.startsWith("!prob joking4") || message.startsWith("!probability joking4")) {
           // processJoking(message, jokingProbability4);
        }
        else if (message.startsWith("!prb") || message.startsWith("!prob") || message.startsWith("!probability")|| message.startsWith("!pattern")) {
          //  processByBust(message, probability);
        }
        else if (!_caughtUp) {
            /* Script isn't ready to respond to the requests below yet. */
            return;
        }
        else if (message == "!n" || message == "!nyan") {
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
        else if (message.startsWith("!pattern ")) {
            var regex = /[+-]?\d+(\.\d+)?/g;
           var result = data.message.match(regex).map(function(v) { return parseFloat(v); });
           var inputs=[];
           var j=0;
           var thing = engine.getEngine();

           for (let i=0;i<result[0];i++)
           {
                        inputs[j]=thing.tableHistory[i].game_crash/100;
                        j++;
           }
          pattern(inputs,result[1]);

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
        else if (message.startsWith("!max") || message.startsWith("!maximum")) {
           // processByLength(message, max);
        }
        else if (message.startsWith("!bst joking125") || message.startsWith("!bust joking125")) {
           // processJoking(message, jokingBust125);
        }
        else if (message.startsWith("!bst joking4") || message.startsWith("!bust joking4")) {
           // processJoking(message, jokingBust4);
        }
        else if (message.startsWith("!gap") ) {
            var operat;
            gap=true;
            
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
             let result = data.message.match(/\d+/g).map(n => parseFloat(n));
              if (result.length==1)
              {
                       bust(1,operat,result[0],gap);
              }
              else 
              {
                 bust(result[0],operat,result[1],gap);
              }
        }
        else if (message.startsWith("!bst") || message.startsWith("!bust")) {
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
                         bust(result[0],operat,1,gap);
                }
                else 
                {
                   bust(result[1],operat,result[0],gap);
                }
             }
             else {
              if (result.length==1)
              {
                       bust(1,operat,result[0],gap);
              }
              else 
              {
                 bust(result[0],operat,result[1],gap);
              }
            }
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
        else if (message.startsWith("!") && _ignore.indexOf(message) == -1) {
            say("Weird .Use !help to view all the commands ");
        }
    }
}
});

/*==================================
 Request processing.
===================================*/




/*==================================
 Calculations for requests.
===================================*/

function pattern(inputs,delta)
{
   var x=inputs.length;
   console.log(x+" "+delta);
   //var jk4=[1.08,1.25,1.31,1.33,1.33,1.33,1.33,1.33,1.33];
var j=0;
//var streak=[1,2,3,4,1.07,1.24,2,3,4,5,6,1.30,1.32,1.32,2,1.07,1.24,1.3,1.32,1.32,1.32,4,5,6,7,8,1.07,1.24,1.30,1.32,1.32,6,7,8,9];
//var len=5;
var check=0;
var index=[]; var k=0;
//console.log(streak.length)
for (let i=0;i<_games.length;i++)
{
 
   
        if (Math.abs(_games[i].bust-inputs[j] )<=delta) 
         {
         
         //  console.log(jk4[j]);
         //  console.log(j);
           j++;
       //  console.log(streak[i]);
         /// console.log(i);
            
                check++;
               // break;
                
         }
         else 
         {check=0; j=0;}
        
     
     if (check==x)
     {
        index[k]=i;
        k++;
         j=0;
         
     } 

}
for ( let i=index[1];i>(index[1]-x-2);i--)
{
     console.log(_games[i].bust) ;

}
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
                        responseText+=  (resultsid[0]+1) + " games ago "+"("+ results[0] +"x"+")"+". " +"https://raigames.io/game/"+(_games[0].id-resultsid[0]);
                        say("Meow Meow : " + responseText);
                    }
                      else 
                      {
                      for (let i=0;i<num;i++)
                      {
                         
                     if (i==num)
                     {
                           responseText+= (resultsid[i]+1)+" games ago "+"("+  results[i] +"x"+")"+". "; }
                           else 
                           {
                            responseText+=  (resultsid[i]+1)+" games ago "+"("+  results[i]+"x" +")"+", ";
                           }
                      
                      
                    }
                    say("Meow Meow : " + responseText);
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
                        for (var i=start-1;i>=start-max_sequence1;i--)
                        {
                            if(i==start-max_sequence1)
                            {
                            responseText+= results[i]+" ";
                            }
                            else responseText+= results[i]+", ";

                            }
                            var m=count-max_sequence1+1;
                            if (start==undefined)
                           { say ("Weird , Never seen") }

                            else {say("Seen : " + max_sequence1 +" games   , " + m  +" games ago: " + " "+ responseText); }
                }
                function customStreak(max_sequence,operat,num,len)
                {
                              


console.log(max_sequence+ " " + num+" " +len);
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
                                              console.log(start);
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
                        
	
	
	 for (var k=0;k<x;k++)
	 {
        
     responeText+= "Seen   " + (index[k]+1 ) +" games ago : " +"(" ; 
       for (var g=index[k];g>(index[k]-max_sequence);g--)
       {
           if (g==(index[k]-max_sequence-1))
           {
            responeText+=_games[g].bust+" ";
           }
           else 
           {
                 responeText+=_games[g].bust+", ";
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
            function bust(num,operat,target,gap)
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
                          if (j==num)
                          {
                              break;
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
                          if (j==num)
                          {
                              break;
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
                        if (j==num)
                        {
                            break;
                        }
                }

               }
            }
            if (gap==false)
           {
                  if (num==1)
                  {
                      if (target==0)
                      {

                    responseText+= (resultsid[0]+1) + " games ago "+"#"+  results[0] +"x" ;
                    say("Seen " + target+ ": " + responseText);
                      }
                      else 
                      {
                        responseText+= (resultsid[0]+1) + " games ago "+"#"+  results[0] +"x" ;
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
                       responseText+= (resultsid[i]+1)+" games ago "+ "#"+  results[i] +"x" +". "; }
                       else 
                       {
                        responseText+= (resultsid[i]+1)+" games ago " + "#"+ results[i] +"x"  +", ";
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
        else 
        {

            var _results=[],_j=0;
_results[_j]=results[0]; 
_j++;
for (let i=0;i<results.length-1;i++)
{
 _results[_j]=parseInt(Math.abs(resultsid[i]-resultsid[i+1]));
 console.log(_results[_j]+" ");
 _j++;
}
responseText+="The last " + _results[0] + "x : " + (resultsid[0]+1) +" games ago. " + "Then  " ;
for (let i=1;i<_j;i++)
{
 
    responseText+= _results[i]+" games , ";
}
say(responseText);
        }


            }//end 




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
    var hash = hmac(serverSeed, "000000000000000007a9a31ff7f07463d91af6b5454241d5faf282e5e0fe1b3a");

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
    /* There's a limit of 499 characters per chat message.  This shouldn't be a problem too often, but, if someone does something like "!streak 1" or
       "!bust nyanx20," this could get pretty long.  Two ways to handle this:  could break the message up or could truncate it.  I chose to truncate,
       because I don't want "!streak <1000000" to print out every game that's ever been played. */
    if (message.length > 499) {
        message = message.slice(0, 496) + '...';
        engine.chat(message);
        //engine.chat("Aaaaaa too long.");
    }
    else {
        engine.chat(message);
    }
}
