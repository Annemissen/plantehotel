const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();

router
    .post('/customer',async (request, response) => {
        //template
        function ok(input) { return (input && input.length > 2) }
        let { firstname, lastname,address,postalcode,city,plants,pickup} = request.body;
        if (ok(firstname) && ok(lastname)) {
            let customer = await controller.createCustomer(firstname, lastname,address,postalcode,city,plants,pickup)
            response.status(201).json({ resultat: 'Customer saved!' })
        } else {
            response.status(406).send('Too little text!');
        };

    })


function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router