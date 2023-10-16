const aqp = require("api-query-params")
const randomToken = require("../services/randomToken")
const User = require("../models/user")
const postCreateUserService = async (name, email, city, password) => {
    try {

        const checkEmail = await User.findOne({ email: email }).exec()
        if (checkEmail) return null
        const opts = {
            name, email, city, password
        }
        let result = await User.create(opts);
        return result
    } catch (error) {
        console.log("error : ", error)
    }
}
const findUserService = async (email, password) => {
    try {
        const user = await User.findOne({ email: email }).exec();
        if (user) {
            const newUser = user.password === password ? user : null
            return newUser
        } else {
            return null
        }

    } catch (error) {
        console.log("error : ", error)
    }
}



const putUpdateUserService = async (obj) => {
    try {
        const userId = obj.userId
        const { email, name, city } = obj
        const checkEmail = await User.findOne({ email: email }).exec()
        if (checkEmail) return null
        let result = await User.updateOne({ _id: userId }, { email, name, city });
        return result
    } catch (error) {
        console.log("error : ", error)
    }
}
const deleteUserService = async (obj) => {
    try {
        const userId = obj.userId
        const user = await User.deleteOne({ _id: userId })
        return user
    } catch (error) {
        console.log("error : ", error)
    }
}
module.exports = {
    postCreateUserService,
    findUserService,
    putUpdateUserService,
    deleteUserService
}