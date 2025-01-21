export default {
    async users(_parent, _args, { models }) {
        return models.User.find({});
    },
    async user(parent, { username, email }, { models }) {
        const query = {};
        if (username) {
            query.username = { $regex: username, $options: "i" };
        }
        if (email) {
            query.email = { $regex: email, $options: "i" };
        }
        const user = await models.User.findOne(query);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
};
