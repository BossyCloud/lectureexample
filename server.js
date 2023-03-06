'use strict';
// load package
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
const PORT = 8080;
const HOST = '0.0.0.0';

let data = [
    {
        id: 1,
        text: 'bla 1',
        time: '9:00',
    },
    {
        id: 2,
        text: 'bla, blai 2',
        time: '9:02',
    },
    {
        id: 3,
        text: 'bla, bla,blai 3',
        time: '9:05',
    }
];
app.get('/data', (req, res) => {
    res.json(data);
});
app.post('/add', (req, res) => {
    let id = req.body.id;
    let text = req.body.text;
    let time = req.body.time;
    data.push({ id: id, text: text, time: time });
    res.json(data);
});
app.listen(PORT, HOST);
console.log('up and running');