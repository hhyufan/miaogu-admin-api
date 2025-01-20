module.exports = {
    async createMessage (_parent, { uid, model, msg }, { models }) {
        return await models.Message.create({
            uid,
            model,
            msg
        })
    },
    async removeMessage (_parent, { id }, { models }) {
        try {
            return !!await models.Message.findOneAndRemove({ _id: id })
        } catch (err) {
            return false
        }
    },
    async updateMessage (_parent, { id, uid, model, msg }, { models }) {
        const updatedMessage = await {
            uid,
            model,
            msg
        }.sanitize()

        return models.Message.findOneAndUpdate({_id: id}, {$set:  updatedMessage}, {new: true});
    }
}
