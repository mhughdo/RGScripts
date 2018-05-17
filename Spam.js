engine.on("msg", function (data) {
if (data.channelName === 'spam')
    {
if (data.username == "QuantumAbacus" || data.username == "-DarkSoul-"  )
{
 setTimeout(function(){ engine.chat("@"+data.username +": Shut up , Please!" ); }, 500);

}

}
});
