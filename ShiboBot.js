

engine.on('msg', function(data) { 
	engine.on('game_starting', function(data) {
    game = data.game_id;

});
   
    	
	 if( (data.message=="!n")  || (data.message=="!summon nyan")) {
var imported = document.createElement('script');
imported.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core.js";
document.head.appendChild(imported);
setTimeout(function(){
var imported1 = document.createElement('script');
imported1.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/sha256.js";
document.head.appendChild(imported1);
var imported2 = document.createElement('script');
imported2.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/hmac.js";
document.head.appendChild(imported2);
},500);
setTimeout(function(){
//JSFiddle code
function divisible(hash, mod) {
    var val = 0;

    var o = hash.length % 4;
    for (var i = o > 0 ? o - 4 : 0; i < hash.length; i += 4) {
        val = ((val << 16) + parseInt(hash.substring(i, i+4), 16)) % mod;
    }

    return val === 0;
}

function genGameHash(serverSeed) {
    return CryptoJS.SHA256(serverSeed).toString()
};


function hmac(key, v) {
    var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    return hmacHasher.finalize(v).toString();
}

function crashPointFromHash(serverSeed) {
    var hash = hmac(serverSeed, '000000000000000007a9a31ff7f07463d91af6b5454241d5faf282e5e0fe1b3a');//ethcrash seed 0x8039f1f45f2df637488cbdbb3f2eb86615a10fe96a7ce79f721355035f3adb59

    if (divisible(hash, 101))
        return 0;

    var h = parseInt(hash.slice(0,52/4),16);
    var e = Math.pow(2,52);

    return (Math.floor((100 * e - h) / (e - h))/100).toFixed(2);
};

var table = [];
var tableLength = 4000;
var nyan=[];
var index=[];

var j=0;
function genTable(crash){
  let hash = crash;
  for(let i=0;i<tableLength;i++){
    let outcome = crashPointFromHash(hash);
	hash = genGameHash(hash);
    table[i] = outcome;
  }
  for(let i=0;i<tableLength;i++){
    table[i] = parseFloat(table[i]);
   if (table[i]>1000) {
    	nyan[j]=table[i];
    	index[j]=i;
    	j++;
         }
  }
  engine.chat("Meow Meow: "+nyan[0]+"x"+" ." +index[0]+" games ago"+" "+"https://raigames.io/game/" +(game-index[0]-1))
  engine.chat("Meow Meow: "+nyan[1]+"x"+" ." +index[1]+" games ago"+" "+"https://raigames.io/game/" +(game-index[1]-1))
engine.chat("Meow Meow: "+nyan[2]+"x"+" ." +index[2]+" games ago"+" "+"https://raigames.io/game/" +(game-index[2]-1))
}


var getEngine = engine.getEngine();
genTable(getEngine.tableHistory[0].hash);
console.log(getEngine.tableHistory[0].hash)

},1000);
	 	
	}
	else if ( data.message=="!kill" ) 
	{
		engine.chat("you can't kill me,sir!")
	}
else if ( data.message=="!beg" ) 
	{
	engine.chat("Begging is a great way to get muted!");
}
	else if ( (data.message=="!med 100") ||  (data.message=="!med 5000") ||  (data.message=="!med 5")||  (data.message=="!med 10")) 
		{

		engine.chat("I don't know,sir!")
	}
	else if ( (data.message=="!prf 1h") ||  (data.message=="!prf 1d"))
	{
		engine.chat("Calculate it yourself!");
	}
	else if ( data.message=="!bust 50" )
	{
		var imported = document.createElement('script');
imported.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core.js";
document.head.appendChild(imported);
setTimeout(function(){
var imported1 = document.createElement('script');
imported1.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/sha256.js";
document.head.appendChild(imported1);
var imported2 = document.createElement('script');
imported2.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/hmac.js";
document.head.appendChild(imported2);
},500);
setTimeout(function(){

function divisible(hash, mod) {
    var val = 0;

    var o = hash.length % 4;
    for (var i = o > 0 ? o - 4 : 0; i < hash.length; i += 4) {
        val = ((val << 16) + parseInt(hash.substring(i, i+4), 16)) % mod;
    }

    return val === 0;
}

function genGameHash(serverSeed) {
    return CryptoJS.SHA256(serverSeed).toString()
};


function hmac(key, v) {
    var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    return hmacHasher.finalize(v).toString();
}

function crashPointFromHash(serverSeed) {
    var hash = hmac(serverSeed, '000000000000000007a9a31ff7f07463d91af6b5454241d5faf282e5e0fe1b3a');//ethcrash seed 0x8039f1f45f2df637488cbdbb3f2eb86615a10fe96a7ce79f721355035f3adb59

    if (divisible(hash, 101))
        return 0;

    var h = parseInt(hash.slice(0,52/4),16);
    var e = Math.pow(2,52);

    return (Math.floor((100 * e - h) / (e - h))/100).toFixed(2);
};

var table = [];
var tableLength = 1000;
var bust50=[];
var index=[];

var j=0;
function genTable(crash){
  let hash = crash;
  for(let i=0;i<tableLength;i++){
    let outcome = crashPointFromHash(hash);
	hash = genGameHash(hash);
    table[i] = outcome;
  }
  for(let i=0;i<tableLength;i++){
    table[i] = parseFloat(table[i]);
   if (table[i]>50) {
    	bust50[j]=table[i];
    	index[j]=i;
    	j++;
         }
  }
  engine.chat( bust50[0]+"x"+"." +" "+index[0]+" games ago");
}


var getEngine = engine.getEngine();
genTable(getEngine.tableHistory[0].hash);
console.log(getEngine.tableHistory[0].hash)

},1000);
     
	}
	else if ( data.message=="!bust 100" )
	{
			var imported = document.createElement('script');
imported.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core.js";
document.head.appendChild(imported);
setTimeout(function(){
var imported1 = document.createElement('script');
imported1.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/sha256.js";
document.head.appendChild(imported1);
var imported2 = document.createElement('script');
imported2.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/hmac.js";
document.head.appendChild(imported2);
},500);
setTimeout(function(){

function divisible(hash, mod) {
    var val = 0;

    var o = hash.length % 4;
    for (var i = o > 0 ? o - 4 : 0; i < hash.length; i += 4) {
        val = ((val << 16) + parseInt(hash.substring(i, i+4), 16)) % mod;
    }

    return val === 0;
}

function genGameHash(serverSeed) {
    return CryptoJS.SHA256(serverSeed).toString()
};


function hmac(key, v) {
    var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    return hmacHasher.finalize(v).toString();
}

function crashPointFromHash(serverSeed) {
    var hash = hmac(serverSeed, '000000000000000007a9a31ff7f07463d91af6b5454241d5faf282e5e0fe1b3a');//ethcrash seed 0x8039f1f45f2df637488cbdbb3f2eb86615a10fe96a7ce79f721355035f3adb59

    if (divisible(hash, 101))
        return 0;

    var h = parseInt(hash.slice(0,52/4),16);
    var e = Math.pow(2,52);

    return (Math.floor((100 * e - h) / (e - h))/100).toFixed(2);
};

var table = [];
var tableLength = 2000;
var bust100=[];
var index=[];

var j=0;
function genTable(crash){
  let hash = crash;
  for(let i=0;i<tableLength;i++){
    let outcome = crashPointFromHash(hash);
	hash = genGameHash(hash);
    table[i] = outcome;
  }
  for(let i=0;i<tableLength;i++){
    table[i] = parseFloat(table[i]);
   if (table[i]>100) {
    	bust100[j]=table[i];
    	index[j]=i;
    	j++;
         }
  }
   engine.chat( bust100[0]+"x"+"." +" "+index[0]+" games ago");
}


var getEngine = engine.getEngine();
genTable(getEngine.tableHistory[0].hash);
console.log(getEngine.tableHistory[0].hash)


},1000);
             
    
	}
	else if  ( data.message=="!help")
	{
		engine.chat("Hi,i'm Shibo-Shiba's Sister.Ask me anything ! ");
	}


});
