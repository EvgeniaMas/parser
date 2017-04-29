var express = require('express');
var app = express();
var useragent = require('express-useragent');
var get_ip = require('ipware')().get_ip;

app.use(useragent.express());
app.get('/', function(req, res){
	 var ip_info = get_ip(req);
	 var language = req.headers["accept-language"].split(",");
   res.send("software:" + req.useragent.os + ", " + '<br>'+  
   	"client IP:" + ip_info.clientIp + ", " + '<br>' +
   	 "language:" + language[0]);
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});







