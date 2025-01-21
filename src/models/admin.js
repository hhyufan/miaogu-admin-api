import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    adminname: {
        type: String,
        required: true,
        index: { unique: true }
    },
    email: {
        type: String,
        index: { unique: true },
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
}, {
    timestamps: true
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
