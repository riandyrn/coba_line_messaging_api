var app = require('express')(),
    http = require('http').Server(app),
    LINEBot = require('line-messaging'),
    bot = LINEBot.create({
        channelID: '1500022422',
        channelSecret: '287963ddd21a67efcb379af8e70e0308',
        channelToken: '3RtR8DgOh+fmIeFxJo1DqQjizXKG1WwtZke8TXkSKO91hjenf52LzkwsS+bAyXZsqsgVNh+rCDwAlzBUV1qmKTu3/6ZUimPu5f+6pJdfr6IcKI6Wl20TJAXKRiZA1Q5759kcqFToFzboACRSkZo4IAdB04t89/1O/w1cDnyilFU='
    }, http),
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', function(req, res){
    
    res.send('<h1>Hello my name is Riandy Rahman Nugraha!</h1>');
});

app.use(bot.webhook('/webhook'));

bot.on(LINEBot.Events.MESSAGE, function(replyToken, message){
    
    console.log("replyToken: " + JSON.stringify(replyToken));
    console.log("message: " + JSON.stringify(message));
});

http.listen(port);