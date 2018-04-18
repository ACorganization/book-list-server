const PORT = process.env.PORT || 3000;
const express = require('express');
const pg = require('pg');
const app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));