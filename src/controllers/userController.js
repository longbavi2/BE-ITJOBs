const randomToken = require("../services/randomToken")
const aqp = require("api-query-params")
const User = require("../models/user")
const { postCreateUserService, getUserByFilterService } = require("../services/userService")

const getUserApi = async (req, res) => {
    let result = await getUserByFilterService(req.query)
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const postUserApi = async (req, res) => {
    let result = await postCreateUserService(req.body)
    return res.status(201).json({
        errorCode: 0,
        data: result
    })
}
const putUpdateUserApi = async (req, res) => {
    let userId = req.body.userId
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}
const deleteUserApi = async (req, res) => {
    const id = req.body.userId
    let user = await User.deleteOne({ _id: id })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}
const postUploadFileApi = async (req, res) => {
    let count = 0
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    try {
        file = req.files.image;
        let result = await uploadSingleToMultipleFileApi(file);
        for (let index = 0; index < result.length; index++) {
            if (result[index].status == "Success") count++;
        }
        return res.status(200).json({
            EC: 0,
            CountSuccess: count,
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            EC: 1,
            data: {
                status: "Error",
                error: error
            }
        })
    }
}
module.exports = { getUserApi, postUserApi, putUpdateUserApi, deleteUserApi, postUploadFileApi }