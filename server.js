const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")
const PORT = process.env.PORT || 5683
require("dotenv").config()


app.use(express.json())

app.use(morgan("dev"))

app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost:27017/bountydb",
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: false,
        useUnifiedTopology: true
    }, () => console.log("Connected to the DataBase"))

app.use("/bounty", require("./routes/bountyRoute"))

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})
//test

app.listen(PORT, () => {
    console.log("Server running on 5683")
})