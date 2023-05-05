// https://assignment-10-client-sepia.vercel.app/allchefdata
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const chefData = require("./chefData.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/allchefdata", (req, res) => {
  res.send(chefData);
});

app.get("/allchefdata/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefData.find((chef) => chef.id == id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});