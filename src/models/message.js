const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
 }, {
    timestamps: true
})
module.exports = mongoose.model('Message', messageSchema)
