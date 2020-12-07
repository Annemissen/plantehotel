const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const session = require("express-session");

const path = require('path');
const publicPath = path.join(__dirname, '/../public/session')
router.use(express.static(publicPath));


const ONE_DAY = 1000 * 60 * 60 * 24; // amount of milliseconds in 24 hours

// While the system is in development the IN_PRODUCTION variable should be false (for test purposes). 
// Change it to true when the system goes in production.
const IN_PRODUCTION = false;

// const app = express();
router.use(session({
    secret: 'hemmelig', // TODO: lav det mere hemmeligt
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: ONE_DAY,
        sameSite: true,
        secure: IN_PRODUCTION,

    }
}));

const users = [{ name: 'un', password: 'pw' }];

router

    .get('/login', async (request, response) => {
        try{
            response.sendFile(publicPath + '/login.html')
        }
        catch (e){
            console.error(e.name + ": " + e.messsage);
        }
    })

    .post('/login', async (request, response) => {
        const { name, password } = request.body;
        
        let user = users.find((usr) => usr.name == name);
        if (user.password == password && user.name == name) {
            request.session.name = user.name;
            response.status(201).send(['login ok!']);

        } else {
            response.sendStatus(401);
        }
    })
    
    .get('/logout', (request, response) => {
        request.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                try {
                    console.log('Test 1');
                    response.redirect('/reservations/login');
                }
                catch (e){
                    console.error(e.name + ": " + e.messsage);
                }
            }
        });
    })
    

    // endpoint to get specific customer found with phone number
    .get("/specific/:customer", async (req, res) => {
        const name = req.session.name;
        if (name) {
            try {
                let specificCustomer = await controller.findCustomer(req.params.customer)
                res.send(specificCustomer)
            } catch (e) {
                sendStatus(e, res)
            }
        } else {
            res.sendStatus(401);
        }

    })

    // endpoint to get list of all costumers
    .get("/allCustomers", async (req, res) => {
        const name = req.session.name;        
        if (name) {
            try {
                let customers = await controller.getAllCustomers();
                res.json(customers);
            } catch (e) {
                sendStatus(e, res);
            }
        } else {
            res.sendStatus(401);
        }
    })

    .get("/overview", async (req, res) => {
        const name = req.session.name;
        if (name){

            try {
                res.sendFile(publicPath + '/reservations.html')
            }
            catch (e){
                sendStatus(e, res);
                console.error(e.name + ": " + e.messsage);
            }
        }
        else {
            res.redirect('/noAcces.html');
        }
    })

    // endpoint for deleting a reservation
    .delete("/removeCustomer/:phoneNr",async (req,res)=>{
        const name = req.session.name;
        if (name){
            try {
                let number = req.params.phoneNr
                await controller.removeCustomer(number)
                return res.sendStatus(200)
            } catch (e) {
                return sendStatus(e,res)
            }
        }
        else {
            res.redirect('/noAcces.html');
        }
    })



function sendStatus(e, response) {
    console.error("Exception: " + e);
    console.error(e.name + ': ' + e.messsage);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router