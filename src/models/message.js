import mongoose from 'mongoose';

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
});

const Message = mongoose.model('Message', messageSchema);
export default Message;
