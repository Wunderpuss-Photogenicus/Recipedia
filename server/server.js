const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;



app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

app.listen(PORT);