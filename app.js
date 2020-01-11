const express = require("express");
const routes = require('./src/Infrastructure/routes');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.use('/', routes);

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
