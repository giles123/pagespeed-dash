const express = require("express");
const routes = require('./src/Infrastructure/routes');
const connectDb = require("./src/Infrastructure/config/connection");

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.use('/', routes);

app.listen(PORT, HOST, () => {
    connectDb();
});
