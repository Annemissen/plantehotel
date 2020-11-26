const express = require('express')
const app = express()
const config = require('./config')


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/api/customers', require('./routes/planteHotel.js'));
app.get('/reservations', function(req, res) {
    res.sendFile(__dirname + '/public/reservations.html')
})

const port = process.env.PORT || config.localPort; // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');

module.exports = app