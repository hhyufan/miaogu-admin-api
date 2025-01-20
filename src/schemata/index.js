const { gql } = require("apollo-server-express")
const adminTypeDefs = require("./admin")
const userTypeDefs = require("./user")
const friendTypeDefs = require("./friend")
const messageTypeDefs = require("./message")
// 如果有其他类型定义，可以继续导入

// 使用 gql 来合并类型定义
const typeDefs = gql`
    # 这里可以添加全局的类型定义，例如扩展类型
     type Query {
        _empty: String
    }

     type Mutation {
        _empty: String
    }
`
// 将所有的 typeDefs 合并
module.exports = [typeDefs, adminTypeDefs, userTypeDefs, friendTypeDefs, messageTypeDefs]
