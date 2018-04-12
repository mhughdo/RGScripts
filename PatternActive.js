engine.on("msg", function (data) {
     if (data.message.startsWith("!pattern ")) {
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
});
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

var responseText="Found " + (k-1) + " pattern , "  ;
/*
for ( let i=index[1];i>(index[1]-x);i--)
{
     responseText+=  _games[i].bust +", " ;

}  */ 
if (index[1]== undefined)
{
    engine.chat("Never seen");
}
else 
{
    var winChance=0;
    var lostChance=0;
    var predictnum=0;
    for (let  i=1;i<k;i++)
    {
       // console.log(  _games[index[i]-x].bust);
       _games[index[i]-x].bust = parseFloat(_games[index[i]-x].bust);
       if ( _games[index[i]-x].bust >2 )
       {
           winChance++;
       }
       else lostChance++;
        predictnum +=   ( _games[index[i]-x].bust)  ;
       
      //  console.log( predictnum);
     
    }
    winChance=  (winChance/(lostChance+ winChance))* 100 ;
  winChance = winChance.toPrecision(2); 

  predictnum  = predictnum /(k-1) ;
  predictnum = predictnum.toPrecision(2); 
responseText+= "Predict next game : " + predictnum +"x "+  ". " +  winChance + " %  >2  next game " ;
engine.chat(responseText);
//console.log(responseText)
}


}


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

function unique(args) {
    var seen = {};
    return args.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    })
}

function utcDate() {
    var utc = new Date();
    return new Date().setMinutes(utc.getMinutes() + utc.getTimezoneOffset());
}

function prob(cashout) {
    /* Based on winProb here: https://raigames.io/scripts/game-logic/clib.js. */
    return 99 / (1.01 * (parseFloat(cashout) - 0.01));
}
var gamewin=0;
var gamelost=0;
