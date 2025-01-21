import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import gravatar from "../../util/gravatar.js";
import { AuthenticationError } from "apollo-server-express";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export default {
    async signUp(_parent, { adminname, email, password }, { models }) {
        email = email.trim().toLowerCase();
        const hashed = await bcrypt.hash(password, 10);
        const avatar = gravatar(email);
        try {
            const admin = await models.Admin.create({
                adminname,
                email,
                avatar,
                password: hashed
            });

            return jwt.sign({ id: admin._id }, JWT_SECRET);
        } catch (err) {
            throw new Error("Error creating account");
        }
    },
    async signIn(_parent, { adminname, email, password }, { models }) {
        if (email) {
            email = email.trim().toLowerCase();
        }
        const admin = await models.Admin.findOne({
            $or: [{ email }, { adminname }]
        });
        console.log(JSON.stringify(admin));
        if (!admin) {
            throw new AuthenticationError("Error signing in");
        }
        const valid = await bcrypt.compare(password, admin.password);
        if (!valid) {
            throw new AuthenticationError("Error signing in");
        }
        return jwt.sign({ id: admin._id }, JWT_SECRET);
    }
};
