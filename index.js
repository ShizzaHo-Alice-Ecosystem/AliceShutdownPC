const express = require('express');
const exec = require('child_process').exec;
const app = express();
const port = 9090;

app.get('/shutdown', (req, res) => {
    exec('shutdown /s /f');
});

app.listen(port);
