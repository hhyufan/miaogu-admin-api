const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const gravatar = require("../../util/gravatar")
const { AuthenticationError } = require("apollo-server-express")

const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    async signUp (_parent, { adminname, email, password }, { models }) {
        // 规范电子邮件地址
        email = email.trim().toLowerCase()
        // 计算密码哈希值，加盐10
        const hashed = await bcrypt.hash(password, 10)
        // 创建 gravatar URL
        const avatar = gravatar(email)
        try {
            const admin = await models.Admin.create({
                adminname,
                email,
                avatar,
                password: hashed
            })

            // 创建并返回 Jwt
            return jwt.sign({ id: admin._id }, JWT_SECRET)
        } catch (err) {
            // 如果创建遇到问题，抛出错误
            throw new Error("Error creating account")
        }
    },
    async signIn (_parent, { adminname, email, password }, { models }) {
        if (email) {
            // 规范电子邮件地址
            email = email.trim().toLowerCase()
        }
        const admin = await models.Admin.findOne({
            $or: [{ email }, { adminname }]
        })
        console.log(JSON.stringify(admin))
        // 如果没有用户，抛出错误
        if (!admin) {
            throw new AuthenticationError("Error signing in")
        }
        // 检查密码
        const valid = await bcrypt.compare(password, admin.password)
        if (!valid) {
            // 如果密码不匹配，抛出错误
            throw new AuthenticationError("Error signing in")
        }
        // 创建并返回 Jwt
        return jwt.sign({ id: admin._id }, JWT_SECRET)
    }
}
