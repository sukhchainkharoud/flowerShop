const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res, next) => {
    
    res.sendfile('./public/the flowershop.html');

});

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is up on port 3000");
})
