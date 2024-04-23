const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('lets check if it work from github instead of git'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
