const express = require("express");
const cors = require("cors");
const routes = require('./src/Infrastructure/routes');
const connectDb = require("./src/Infrastructure/config/connection");

const PORT = process.env.NODE_ENV === "test" ? 8888 : 80;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use('/', routes);

const server = app.listen(PORT, HOST, () => {
    connectDb();
});

module.exports = {app: app, server: server};
