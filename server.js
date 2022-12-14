const express = require("express");
const pool = require("./db/db");
const cors = require("cors");
const path = require("path")
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 5050;

app.use(express.json());

app.use(cors());

app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "react-form/dist", "index.html"));
})

app.get("/", (req, res) => {
  return res.send("IT WORKS!!!!");
});

function completePayment(cardNo, cvv, expiry, payment) {
  return true;
}

app.post("/register", async (req, res) => {
  const {
    name,
    email,
    age,
    gender,
    phone,
    slot,
    cardNo,
    cvv,
    expiry,
    payment,
  } = req.body;
  const timestamp = new Date();

  if (!completePayment(cardNo, cvv, expiry, payment)) {
    return res.json({ message: "Payment Failed!!!" });
  }

  if (!(age < 65 && age > 18)) {
    return res.json({
      message: "Only users with age >= 18 and age <= 65 are allowed!!",
    });
  }

  await pool
    .query("select email from yoga where email = $1", [email])
    .then((result) => {
      if (result.rowCount > 0) {
        return res.json({ message: "Already Registered!!" });
      }
    })
    .catch((e) => console.log(e));

  await pool
    .query(
      "insert into yoga (name, age, email, contactnumber, gender, timeslot, payment, timestamp) values ($1, $2, $3, $4, $5, $6, $7, $8)",
      [name, age, email, phone, gender, slot, payment, timestamp]
    )
    .then(() => {
      return res.json({ message: "Registration Successful!!" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ message: "Registration failed!!!" });
    });
});

app.listen(PORT, () =>
  console.log(`Server running : http://localhost:${PORT}`)
);
