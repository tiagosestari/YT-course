const express = require('express');
const path = require('path');

const app = express();

const port = 3000;
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    //res.send("Olá");
    res.sendFile(path.join(__dirname, '/apps-menu.html'));
});

app.get('/blackjack', function(req, res) {
    //res.send("Olá");
    app.use(express.static(path.join(__dirname, 'BlackJack App')));
    res.sendFile(path.join(__dirname, '/BlackJack App/index.html'));
  });




app.listen(port);
console.log('Server started at http://localhost:' + port);