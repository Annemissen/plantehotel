const express = require('express')
const app = express()
const config = require('./config')


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/api/customer', require('./routes/planteHotel.js'));

const port = process.env.PORT || config.localPort; // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');

module.exports = app