const md5 = require("md5")
const bcrypt = require("bcryptjs");
require('../extensions/index');
const gravatar = email => {
    const hash = md5(email)
    return `https://www.gravatar.com/avatar/${hash}.jpg?d=identicon`
}
const userInfo = {
    username: "咔吧蔚",
    email: "what@bzd.com",
    password: "Azuremy.bk",
    baka: "咔吧"
};
(async () => {
    (await userInfo.sanitize( async ([k, v], i, a, o)=>  {
        // key: k, a[i][0], Object.keys(o)[i], a.keys()[i], Object.entries(o).keys()[i]......
        // value: v, o[k], a[i][1], Object.values(o)[i], a.values()[i], Object.entries(o).values()[i]......
        // index: i
        // array: a, Object.entries(o)
        // object: o, userInfo
        return [k, v]
    })).print()
})()


// (async ({ username, email, password }) => {
//     ({
//         ...(username && { username }),
//         ...(email && { email: email.toLowerCase(), avatar: gravatar(email) }),
//         ...(password && { password: await bcrypt.hash(password, 10) })
//     }).print()
// })(userInfo)
