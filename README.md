# 喵咕后台管理平台 API

欢迎来到**喵咕后台管理平台 API**的使用指南！这里是一个基于**Express.js**、**GraphQL**和**MongoDB**构建的后台管理API，旨在为喵咕聊天平台提供高效的管理功能。通过这个API，管理员可以轻松管理用户、好友和消息等数据，享受简单而强大的管理体验！✨

## 📝 项目简介

喵咕后台管理平台 API 是一个使用纯JavaScript实现的GraphQL API，支持管理员进行各种数据操作，包括用户管理、好友管理和消息管理等。通过灵活的查询和变更，管理员可以高效地与数据库交互，轻松管理平台的数据。 (｡•̀ᴗ-)✧

## 🚀 技术栈

- **Express.js**: 轻量级的Node.js web框架，快速构建API。
- **GraphQL**: 强大的查询语言，提供灵活的数据获取方式。
- **MongoDB**: 高效的NoSQL数据库，存储平台数据。
- **Apollo Server**: 社区驱动的GraphQL服务器，助你轻松构建API。
- **Bcrypt.js**: 用于安全的密码哈希处理，保护用户隐私。
- **jsonwebtoken**: 用于生成和验证JWT（JSON Web Tokens）。
- **dotenv**: 用于管理环境变量，配置灵活方便。

## 📦 安装与运行

1. **克隆项目**

   ```bash
   git clone https://github.com/hhyufan/miaogu_admin_api.git
   cd miaogu_admin_api
   ```

2. **安装依赖**

   使用npm安装项目依赖：

   ```bash
   npm install
   ```

3. **配置环境变量**

   在项目根目录下创建一个名为`.env`的文件，并添加以下内容：

   ```
   PORT=4000
   DB_HOST=mongodb://localhost:27017/miaogu
   JWT_SECRET=your_jwt_secret
   ```

4. **运行项目**

   启动API服务器：

   ```bash
   npm start
   ```

   服务器启动后，你将在控制台看到类似以下的输出：

   ```
   🎉 GraphQL Server running at http://localhost:4000/api!
   ```

## 🌟 功能概述

- **管理员管理**: 支持管理员的注册、登录和信息查询。
- **用户管理**: 管理员可以创建、更新和删除用户信息。
- **好友管理**: 管理员可以管理好友信息，包括创建、更新和删除好友。
- **消息管理**: 管理员可以管理聊天消息，包括创建、更新和删除消息。

## 📮 API 操作示例

### 1. 管理员操作

#### 注册管理员

```graphql
mutation {
  signUp(
    adminname: "YuFan2"
    email: "1838248653@qq.com"
    password: "FoxAzuremyBaka"
  )
}
```

#### 登录管理员

```graphql
mutation {
  signIn(email: "1838248655@qq.com", password: "FoxAzuremyBaka")
}
```

#### 获取当前管理员信息

```graphql
{
  me {
    adminname
    email
    id
  }
}
```

#### 获取特定管理员信息

```graphql
{
  admin(adminname: "YuFan") {
    adminname
    email
    id
  }
}
```

#### 获取所有管理员信息

```graphql
{
  admins {
    adminname
    email
    id
  }
}
```

### 2. 用户操作

#### 创建用户

```graphql
mutation {
  createUser(
    username: "bakaFox"
    password: "Foxbaka"
    email: "yukiisait@outlook.jp"
  ) {
    username
  }
}
```

#### 获取所有用户信息

```graphql
{
  users {
    username
  }
}
```

#### 获取特定用户信息

```graphql
{
  user(username: "A") {
    username
  }
}
```

#### 删除用户

```graphql
mutation {
  removeUser(id: "6786f89db6958ca3f40ebe00")
}
```

#### 更新用户信息

```graphql
mutation {
  updateUser(id: "678683b2826f276c248caf27", email: "yufan@outlook.jr904p") {
    email
  }
}
```

### 3. 好友操作

#### 获取所有好友信息

```graphql
{
  friends {
    name
  }
}
```

#### 创建好友

```graphql
mutation {
  createFriend(name: "Azuremy", detail: "一只咔吧") {
    id
  }
}
```

#### 更新好友信息

```graphql
mutation {
  updateFriend(id: "678700601ff0b80704cea416", detail: "一只有很多可取之处的咔") {
    detail
  }
}
```

#### 删除好友

```graphql
mutation {
  removeFriend(id: "6786fb851ff0b80704cea40d")
}
```

## 🐾 贡献

欢迎任何形式的贡献！如果你有好的想法或发现了bug，请提交Issue或Pull Request，我们期待你的加入！(｡•̀ᴗ-)✧

## 💖 感谢

感谢你对喵咕后台管理平台的关注！希望你在这里享受管理的乐趣，轻松应对各种挑战！(≧ω≦) 如果你喜欢这个项目，欢迎给我们星星⭐️！
