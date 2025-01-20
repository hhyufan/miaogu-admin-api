module.exports = {
    async users (_parent, _args, { models }) {
        return models.User.find({})
    },
    async user(parent, { username, email }, { models }) {
        // 创建查询条件对象
        const query = {}

        // 添加模糊查找条件
        if (username) {
            query.username = { $regex: username, $options: "i" } // 模糊查找用户名，'i' 表示不区分大小写
        }

        if (email) {
            query.email = { $regex: email, $options: "i" } // 模糊查找电子邮件
        }

        // 使用 AND 逻辑查找用户
        const user = await models.User.findOne(query)

        // 如果没有找到用户，抛出错误
        if (!user) {
            throw new Error("User not found")
        }

        return user // 返回找到的用户
    }
}
