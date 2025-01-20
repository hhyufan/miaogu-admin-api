const mongoose = require("mongoose")

const friendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: {unique: true}
    },
    detail: {
        type: String,
        required: true
    }
})

const Friend = mongoose.model("Friend", friendSchema)
module.exports = Friend
