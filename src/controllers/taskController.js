const { createTaskService, getAllTaskService, putUpdateTaskService } = require("../services/taskService")
const createTaskApi = async (req, res) => {
    let result = await createTaskService(req)
    return res.status(200).json({
        EC: 0,
        Data: result
    })
}
const getAllTaskApi = async (req, res) => {
    let result = await getAllTaskService(req)
    return res.status(200).json({
        EC: 0,
        Data: result
    })
}
const putUpdateTaskApi = async (req, res) => {
    console.log(req.body)
    let id = req.body.id
    delete req.body.id
    let options = req.body
    let result = await putUpdateTaskService(id, options)
    return res.status(200).json({
        EC: 0,
        Data: result
    })
}
module.exports = {
    createTaskApi, getAllTaskApi, putUpdateTaskApi
}