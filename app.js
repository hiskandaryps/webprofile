const express = require("express");
const app = express();
const port = process.env.PORT || 80;

app.use(express.static("public"));

app.use("/", (req, res) => {
  res.sendFile("/public/index.html");
});

app.listen(port, () => {
  console.log(`Web is running`);
});