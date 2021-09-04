const express = require("express");
const config = require("config");
const app = express();

const PORT = config.get("port") || 5000;

app.listen(PORT, () => console.log(`Работает на поре: ${PORT}`));

app.get("/express_backend", (req, res) => {
  res.send({ express: "Я покакал" });
});
