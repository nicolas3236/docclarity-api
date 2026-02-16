const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DocClarity API running");
});

app.post("/v1/auth/login", (req, res) => {
  const token = jwt.sign(
    { email: "test@docclarity.fr", subscription: { status: "active" } },
    "supersecret",
    { expiresIn: "1h" }
  );
  res.json({ access_token: token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
