var app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser'),
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(bodyParser.json());

app.get('/', function(req, res){
    
    res.send('<h1>Hello my name is Riandy Rahman Nugraha!</h1>');
});

app.post('/', function(req, res){
    
    console.log(req.headers);
    console.log(req.body);
    
    res.status(200).json({status: "success"});
});

server.listen(port);