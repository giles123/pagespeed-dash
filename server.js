const express = require("express");
const Site = require("./src/Site");

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.get("/profile", (req, res) => {
    const site = new Site(req.query.url);
  
    res.send(site);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
