'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hallo Zusammen. Ich will die Nachricht senden, dass ich diese zweite Aufgabe komplett gelöst habe! Version 2');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
