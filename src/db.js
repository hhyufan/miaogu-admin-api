import mongoose from "mongoose"; // 1. 导入 mongoose 库

export const connect = (DB_HOST) => { // 2. 导出连接函数
    mongoose.set("useNewUrlParser", true); // 4. 使用新的 URL 解析器
    mongoose.set("useFindAndModify", false); // 5. 禁用 findAndModify 的默认行为
    mongoose.set("useCreateIndex", true); // 6. 使用创建索引的选项
    mongoose.set("useUnifiedTopology", true); // 7. 使用统一的拓扑结构
    mongoose.connect(DB_HOST).catch(err => {
        console.error("MongoDB connection error:", err); // 输出错误信息
        console.log("Please make sure MongoDB is running."); // 提示 MongoDB 连接错误
        process.exit(1); // 退出进程并返回错误代码
    }); // 8. 连接到 MongoDB 数据库

    mongoose.connection.on("error", err => { // 9. 监听连接错误事件
        console.error(err); // 10. 输出错误信息
        console.log("MongoDB connection error. Please make sure MongoDB is running."); // 11. 提示 MongoDB 连接错误
        process.exit(); // 12. 退出进程
    });
};

export const close = () => { // 13. 定义关闭连接的函数
    mongoose.connection.close().catch(err => {
        console.error("Error closing MongoDB connection:", err); // 输出关闭连接时的错误信息
    }); // 14. 关闭 MongoDB 连接
};
