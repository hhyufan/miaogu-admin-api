const { ApolloServer, Config } = require("apollo-server-express") // 1. 导入 ApolloServer 和 Config
const express = require("express") // 2. 导入 express 框架
require("dotenv").config() // 3. 加载环境变量
require('./extensions/index');
const db = require("./db") // 4. 导入数据库连接模块
const resolvers = require("./resolvers") // 5. 导入 GraphQL 解析器
const models = require("./models") // 6. 导入数据模型
const typeDefs = require("./schemata") // 7. 导入 GraphQL 类型定义
const jwt = require("jsonwebtoken") // 8. 导入 jsonwebtoken 模块
const helmet = require("helmet") // 9. 导入 helmet
const cors = require("cors") // 10. 导入 cors
const depthLimit = require("graphql-depth-limit") // 11. 导入深度限制规则
const { createComplexityLimitRule } = require("graphql-validation-complexity") // 12. 导入复杂度限制规则

const port = process.env.PORT || 4000 // 13. 设置端口
const DB_HOST = process.env.DB_HOST // 14. 获取数据库主机地址

const app = express() // 15. 创建 Express 应用实例

app.use(helmet()) // 16. 使用 helmet 中间件
app.use(cors()) // 17. 使用 cors 中间件

db.connect(DB_HOST) // 18. 连接到数据库

// 验证 JWT 并返回用户信息的函数
const getUser = (token) => {
    if (token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET) // 19. 验证 JWT
        } catch (err) {
            throw new Error("Session invalid") // 20. 抛出异常
        }
    }
}

/**
 * @type {Config}
 */
const serverConfig = { // 21. 配置 Apollo Server
    typeDefs, // 22. GraphQL 类型定义
    resolvers, // 23. 解析器
    validationRules: [ // 24. 验证规则数组
        createComplexityLimitRule(1000) // 26. 复杂度限制规则
    ],
    context: ({ req }) => { // 27. 上下文函数
        const token = req.headers.authorization // 28. 从请求头获取 JWT
        const admin = getUser(token) // 29. 验证 token，获取用户信息

        // 检查用户是否存在
        if (!admin) {
            throw new Error("Unauthorized access. User not authenticated.") // 30. 抛出未授权错误
        }

        return { models, admin } // 31. 返回上下文，包括数据模型和用户信息
    }
}

const server = new ApolloServer(serverConfig) // 32. 创建 Apollo Server 实例

server.applyMiddleware({ app, path: "/api" }) // 33. 将 Apollo Server 中间件应用到 Express 应用

app.listen({ port }, () => // 34. 启动 Express 应用并监听指定端口
    console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}!`) // 35. 输出服务器运行信息
)
