/*
	Follower Bot for Ethcrash.io
    Developed by Darksoul
    Donations are appreciated on account: darksoul or -DarkSoul- on ethcrash
*/

var user = "SeePizza"; //User to follow

var autocashout = "10000" //Target multiplier to cashout automatically if following user doesn't cash out.

var baseBet = 1; //Amount to bet if constant bet is on
var bet=baseBet;
engine.on('player_bet', function(data) {
    if (data.username == user) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    result = xhttp.responseText;

                    result = result.split("<h5>");
var idx=result[4].indexOf("mNano");
result=result[4].slice(0,idx);
console.log(result);
result=result.replace(",","");
result=parseFloat(result);
  bet = balance - result;
                 
                        engine.placeBet(Math.round(bet * 100), Math.round(autocashout * 100));
                    
                }
            }
            xhttp.open("GET", "user/" + user, true);
            xhttp.send();
        
    };
});

engine.on('game_crash', function(data) {
    if  (engine.lastGamePlay()=='WON' )   { 
        bet=baseBet;

    
 }

    	var xhttp = new XMLHttpRequest();
    	xhttp.onreadystatechange = function() {
        	if (this.readyState == 4 && this.status == 200) {
            	balance = xhttp.responseText;
            	balance = balance.split("<h5>");
            	balance = balance[4].split("mNano");
            	balance = balance[0].replace(/,/g, "");
        	}
    	};
    	xhttp.open("GET", "user/" + user, true);
    	xhttp.send();
	
	});

engine.on('cashed_out', function(data) {
    if (data.username == user) {
        engine.cashOut();
     
    }
   
});

