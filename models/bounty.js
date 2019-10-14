const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: String,
    type: {
        type: String,
        enum: ["Sith", "Jedi"]
    },
    isLiving: {
        type: Boolean,
        default: true
    },
    bounty: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Bounty", bountySchema)