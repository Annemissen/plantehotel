const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router
// post a customer
    .post("/", async (req, res) => {
        try{
        let customer = await controller.createCustomer(req.body)
        res.status(206).json({result: "Customer saved!"})
        } catch (e) {
            sendStatus(e,res)
        }
    })

// endpoint to get specific customer found with phone number
    .get("/specific/:customer", async (req, res) => {
        try {
            let specificCustomer = await controller.findCustomer(req.params.customer)
            res.send(specificCustomer)
        } catch (e) {
            sendStatus(e,res)
        }
    })

// endpoint to get list of all costumers
    .get("/allCustomers", async (req,res)=>{
        try {
            let customers = await controller.getAllCustomers();
            res.json(customers);
        } catch (e) {
            sendStatus(e, res);
        }
    })

// endpoint for deleting a reservation
    .delete("/removeCustomer/:phoneNr",async (req,res)=>{
        try {
            let number = req.params.phoneNr
            await controller.removeCustomer(number)
            res.sendStatus(200).json({result: "OK"})
        } catch (e) {
            sendStatus(e,res)
        }
    })
    



function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router