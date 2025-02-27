import express from "express"
import bodyParser from "body-parser"
import handler from "./api/createContactAndLead.js"

const app = express()
app.use(bodyParser.json())
app.post("/api/createContactAndLead", handler)
app.listen(3000)
