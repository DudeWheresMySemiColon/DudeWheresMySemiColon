var express = require("express");

var app = express();

require('./config/middleware.js')(app, express);

var port = process.env.PORT || 3000;


app.listen(port);

console.log('Server now listening on port ' + port);
