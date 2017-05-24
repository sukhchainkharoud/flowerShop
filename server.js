const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res, next) => {
    
    res.sendfile('./public/the flowershop.html');

})

app.listen(3000, () => {
    console.log("Server is up on port 3000");
})
