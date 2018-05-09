//Used to calculate the sha256 hashes of previous games
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
    var hash = hmac(serverSeed, '0x8039f1f45f2df637488cbdbb3f2eb86615a10fe96a7ce79f721355035f3adb59');//ethcrash seed 0x8039f1f45f2df637488cbdbb3f2eb86615a10fe96a7ce79f721355035f3adb59
    //000000000000000007a9a31ff7f07463d91af6b5454241d5faf282e5e0fe1b3a;0x8039f1f45f2df637488cbdbb3f2eb86615a10fe96a7ce79f721355035f3adb59
    if (divisible(hash, 101))
        return 0;

    var h = parseInt(hash.slice(0,52/4),16);
    var e = Math.pow(2,52);

    return (Math.floor((100 * e - h) / (e - h))/100).toFixed(2);
};



   

var len=812749;
var A = [];
var table = [];
var tableID=[];//holds the crash points for previous games
var tableLength = 812749-2;//number of games you want to load, if the number is above 10000 it may lag for a couble seconds.
var getEngine = engine.getEngine();
function genTable(crash){
  let hash = crash;
  for(let i=0;i<tableLength;i++){
    let outcome = crashPointFromHash(hash);
	hash = genGameHash(hash);
    table[i] = outcome;
    tableID[i]=len;
    len--;
   // console.log(tableID[i]);
  }
  for(let i=0;i<tableLength;i++){
   
    table[i] = parseFloat(table[i]);
    tableID[i]=parseFloat(tableID[i]);
     A.push([tableID[i],table[i]]);
  }
}


genTable(getEngine.tableHistory[0].hash);
console.log(getEngine.tableHistory[0].hash)
expor(A);
//console.log(table);
},1000);


function expor(A)
{



var csvRows = [];

for(var i=0, l=A.length; i<l; ++i){
    csvRows.push(A[i].join(','));
}

var csvString = csvRows.join("\n");
var a         = document.createElement('a');
a.href        = 'data:attachment/csv,' +  encodeURIComponent(csvString);
a.target      = '_blank';
a.download    = 'myFile.csv';

document.body.appendChild(a);
a.click();
}
