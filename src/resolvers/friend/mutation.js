module.exports = {
    async createFriend (_parent, { name, detail}, { models }) {
        return await models.Friend.create({
            name,
            detail
        })
    },
    async removeFriend (_parent, { id }, { models }) {
        try {
            return !!await models.Friend.findOneAndRemove({ _id: id })
        } catch (err) {
            return false
        }
    },
    async updateFriend (_parent, { id, user, detail }, { models }) {
        const updatedFriend = await  {
            user,
            detail
        }.sanitize()

        return models.Friend.findOneAndUpdate({_id: id}, {$set: updatedFriend}, {new: true});
    }
}
