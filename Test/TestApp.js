
const express = require('express');
const { get } = require('mongoose');
const app = express();
const fetch = require('node-fetch');


exports.app = app;




app.get('/api/customers', async (req, res) => {
    try {
        let customers = await fetch('/api/customers');
        await res.send(await (customers.json()));
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }

    };
});

app.post('/api/customers', (req, res) => {
    res.send(req.body);
})


