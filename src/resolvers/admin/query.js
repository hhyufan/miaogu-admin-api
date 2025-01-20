module.exports = {
    async admin(_parent, { adminname }, { models }) {
        return models.Admin.findOne({ adminname })
    },

    async admins(_parent, _args, { models }) {
        return models.Admin.find({})
    },

    async me(_parent, _args, { models, admin }) {
        return models.Admin.findById(admin.id)
    }
}
