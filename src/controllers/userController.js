const randomToken = require("../services/randomToken")
const aqp = require("api-query-params")
const User = require("../models/user")
const { postCreateUserService, findUserService, putUpdateUserService, deleteUserService } = require("../services/userService")

const postUserLoginAPI = async (req, res) => {
    const { email, password } = req.body
    let result = await findUserService(email, password)
    if (result) {
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    } else {
        return res.status(400).json("Email or Password is not Valid")
    }

}
const postUserRegisterAPI = async (req, res) => {
    const { name, email, city, password } = req.body
    let result = await postCreateUserService(name, email, city, password)
    if (result) {
        return res.status(201).json({
            errorCode: 0,
            data: result
        })
    } else {
        return res.status(400).json("Email is used")
    }
}
const putUpdateUserAPI = async (req, res) => {
    const result = await putUpdateUserService(req.body)
    if (result) {
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    } else {
        return res.status(400).json("Update Failed")
    }

}
const deleteUserAPI = async (req, res) => {
    const result = await deleteUserService(req.body)
    return res.status(200).json({
        errorCode: 0,
        data: result
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
module.exports = { postUserLoginAPI, postUserRegisterAPI, putUpdateUserAPI, deleteUserAPI }