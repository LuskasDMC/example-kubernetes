import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => res.send(`${process.env.DB_USERNAME}`));

app.listen(5555, () => console.log("Example app listening on port 3000!"));
