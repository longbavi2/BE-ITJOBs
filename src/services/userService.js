const aqp = require("api-query-params")
const randomToken = require("../services/randomToken")
const User = require("../models/user")
const postCreateUserService = async (options) => {
    try {
        const opts = {
            ...options,
            token: randomToken(20)
        }
        let result = await User.create(opts);
        return result
    } catch (error) {
        console.log("Lỗi : ", error)
    }
}
const getUserByFilterService = async (options) => {
    try {
        const { filter } = aqp(options);
        let result = null
        result = await User.find(filter).exec();
        return result
    } catch (error) {
        console.log("Lỗi : ", error)
    }
}
module.exports = {
    postCreateUserService, getUserByFilterService
}