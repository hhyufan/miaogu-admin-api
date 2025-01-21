import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true }
    },
    detail: {
        type: String,
        required: true
    }
});

const Friend = mongoose.model("Friend", friendSchema);
export default Friend;
