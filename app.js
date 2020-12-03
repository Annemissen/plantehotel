const config = require('./config')
// const session = require('express-session');
const express = require('express')


const app = express()
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/session'));
app.use(express.json());

// Create/post reservation
app.use('/api/customers', require('./routes/planteHotel.js'));

// Reservations - session
app.use('/reservations', require('./routes/reservationsSession.js'));

// Login page
// app.get('/login', function(req, res){
//     res.sendFile(__dirname+'/public/session/login.html')
// });


const port = process.env.PORT || config.localPort; // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');

module.exports = app