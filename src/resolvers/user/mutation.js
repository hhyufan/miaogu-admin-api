import bcrypt from "bcryptjs";
import gravatar from "../../util/gravatar.js";

export default {
    async createUser(_parent, { username, email, password }, { models }) {
        email = email.trim().toLowerCase();
        const hashed = await bcrypt.hash(password, 10);
        const avatar = gravatar(email);
        return await models.User.create({
            username,
            email,
            avatar,
            password: hashed
        });
    },
    async removeUser(_parent, { id }, { models }) {
        try {
            return !!await models.User.findOneAndRemove({ _id: id });
        } catch (err) {
            return false;
        }
    },
    async updateUser(_parent, { id, username, email, password }, { models }) {
        email = email.trim().toLowerCase();
        const updatedUser = await {
            username,
            email,
            password
        }.sanitize(async ([key, value]) => {
            if (key === "password" && value) return [key, await bcrypt.hash(value, 10)];
            if (key === "email") return ["avatar", gravatar(value)];
        });
        return models.User.findOneAndUpdate({ _id: id }, { $set: updatedUser }, { new: true });
    }
};
