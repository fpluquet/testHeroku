import express from "express"

var app = express()

app.get("/", (req, res) => res.json({"answer": "hello"}))

app.listen(3000)