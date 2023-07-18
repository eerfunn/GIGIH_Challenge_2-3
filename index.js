const express = require("express");
const router = require("./routes/route");
const { DBConnect } = require("./config/db");
const port = process.env.port || 3000;
const app = express();

app.use(express.json());
app.use("/api/v1", router);

DBConnect();

app.listen(port, () => {
  console.log(`Express running at http://localhost:${port}`);
});
