const express = require("express");
const SiteRepository = require("./src/SiteRepository");

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.get("/profile", (req, res) => {
    let siteRepo = new SiteRepository();
    let site = siteRepo.findByURL(req.query.url);
  
    res.send(site);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
