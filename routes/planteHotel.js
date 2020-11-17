const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router
    .post("/", async (req, res) => {
        res.send(await controller.createCustomer(req.body));
    })

    .get("/", async (reg, res) => {
        res.send(await controller.getCustomers());
    })


    .get("/:customer", async (req, res) => {
        const customers = await controller.getCustomers();
        const id = req.params.customer;

        console.log(id);
        // console.log(customers);
        let add = customers.find(x => x.mobile == id);
        // const json2 = await add.json();
        console.log(add);
        res.send(add);
    })



function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router