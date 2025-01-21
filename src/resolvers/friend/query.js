export default {
    async friends(_parent, _args, { models }) {
        return models.Friend.find({});
    },

    async friend(_parent, { name }, { models }) {
        return models.Friend.findOne({ name });
    }
};
