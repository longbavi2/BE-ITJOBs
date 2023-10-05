const Project = require("../models/project")
const { createProjectService, getAllProjectService, putUpdateProjectService, deleteProjectService } = require("../services/projectService")
const postCreateProjectApi = async (req, res) => {
    let result = await createProjectService(req.body)
    return res.status(200).json({
        EC: 0,
        Data: result
    })
}
const getAllProjectApi = async (req, res) => {
    let result = await getAllProjectService(req)

    return res.status(200).json({
        EC: 0,
        Data: result
    })
}
const putUpdateProjectApi = async (req, res) => {
    let id = req.body.id
    delete req.body.id
    let options = req.body
    let result = await putUpdateProjectService(id, options)
    return res.status(200).json({
        EC: 0,
        Data: result
    })
}
const deleteProjectApi = async (req, res) => {
    let id = req.body.id
    let result = await deleteProjectService(id)
    return res.status(200).json({
        EC: 0,
        Data: result
    })
}
module.exports = {
    postCreateProjectApi, getAllProjectApi, putUpdateProjectApi, deleteProjectApi
}