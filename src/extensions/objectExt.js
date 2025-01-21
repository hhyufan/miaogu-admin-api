Object.prototype.print = function() {
    console.log(this);
    return this;
};

Object.prototype.sanitize = async function(callback) {
    const result = Object.entries(this);
    const keys = Object.keys(this);
    if (typeof callback === 'function') {
        const newValues = []; // 用于存储处理后的值
        for await (const [index, [key, value]] of result.entries()) {
            newValues.push(await callback([key, value], index, result, this));
        }
        // 更新 result 数组
        newValues.forEach((newValue, index) => {
            if (newValue !== undefined) {
                if (result[index][0] === newValue[0]) {
                    result[index] = newValue;
                }
                if (!keys.includes(newValue[0])) {
                    result.push(newValue);
                }
            }
        });
    }
    // 过滤掉 undefined 的值
    return Object.fromEntries(result.filter(([_key, value]) => value !== undefined));
};

export default {}; // 导出空对象
