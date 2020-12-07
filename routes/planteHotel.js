const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const path = require('path');
const publicPath = path.join(__dirname, '/../public')
router.use(express.static(publicPath));




router
    // post a customer
    .post("/", async (req, res) => {
        try {
            let customer = await controller.createCustomer(req.body)
            res.status(206).json({ result: "Customer saved!" })
        } catch (e) {
            sendStatus(e, res)
        }
    })

    // .get("/test", async (req, res) => {
    //     try {
    //         // res.redirect(__dirname + '/../public/reservations.html')
    //         res.sendfile(publicPath + '/reservations.html');
    //         // res.sendfile(__dirname + '/../public/reservations.html');
    //     }
    //     catch(e){
    //         console.error(e.name + ": " + e.messsage);
    //         sendStatus(e, res)
    //     }
    // })


function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router