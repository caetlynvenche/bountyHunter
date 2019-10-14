const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")



app.use(express.json())

app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/bountydb",
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



app.listen(5683, () => {
    console.log("Server running on 5683")
})