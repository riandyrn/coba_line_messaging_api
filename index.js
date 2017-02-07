var app = require('express')(),
    http = require('http').Server(app),
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', function(req, res){
    
    res.send('<h1>Hello World!</h1>');
});

http.listen(port, function(){
    
    console.log('listening on port ' + port);
});