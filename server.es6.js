const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen('8080', () => {
    console.log('App is listening on port 8080');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})