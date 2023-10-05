const aqp = require("api-query-params")
const Task = require("../models/task")
const createTaskService = async (req) => {
    try {
        let type = req.body.type
        console.log(type)
        delete req.body.type
        if (type === "EMPTY_TASK") {
            let result = await Task.create(req.body);
            return result
        }
    } catch (error) {
        console.log(error)
    }
}
const getAllTaskService = async (req) => {
    try {
        const { filter, limit } = aqp(req.query);
        let page = filter.page
        delete filter.page
        let skip = (page - 1) * limit
        let Tasks = null
        Tasks = await Task.find(filter).limit(limit).skip(skip).exec();
        return Tasks

    } catch (error) {
        console.log("err", error)
    }
}
const putUpdateTaskService = async (id, options) => {
    try {
        let result = await Task.updateOne({ _id: id }, options)
        return result;
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createTaskService, getAllTaskService, putUpdateTaskService
}