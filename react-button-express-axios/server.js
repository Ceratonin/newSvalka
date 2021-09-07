const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

const app = express();

const PORT = config.get("port") || 5000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Работает на порте: ${PORT}`));

app.post("/serv_back", (req, res) => {
  console.log(req.body);
  return req.body.name === ""
    ? res.send("Введите имя!")
    : res.json(`Здравствуйте, ${req.body.name}`);
});
