const aqp = require("api-query-params")
const Project = require("../models/project")
const createProjectService = async (req) => {
    console.log(req)
    const { type, name, startDate, endDate, description, customerInfor: customerInfor, leader } = req
    if (type === "EMPTY") {
        let result = await Project.create({
            type, name, startDate, endDate, description, customerInfor: customerInfor, leader: leader
        }
        );
        return result
    }
    if (req.type === "ADD_USER") {
        let result = await Project.findById(req.projectID).exec()
        for (let i = 0; i < req.userArr.length; i++) {
            if (!result.usersInfor.includes(req.userArr[i])) {
                result.usersInfor.push(req.userArr[i])
            }
        }
        let resultFinal = await result.save();
        return resultFinal
    }
    if (req.type === "REMOVE_USER") {
        let result = await Project.findById(req.projectID).exec()
        for (let i = 0; i < req.userArr.length; i++) {
            if (!result.usersInfor.includes(req.userArr[i])) {
                result.usersInfor.pull(req.userArr[i])
            }
        }
        let resultFinal = await result.save();
        return resultFinal;
    }
    if (req.type === "ADD_TASK") {
        let result = await Project.findById(req.projectID).exec()
        for (let i = 0; i < req.tasksArr.length; i++) {
            if (!result.task.includes(req.tasksArr[i])) {
                result.task.push(req.tasksArr[i])
            }
        }
        let resultFinal = await result.save();
        return resultFinal;
    }
    if (req.type === "REMOVE_TASK") {
        let result = await Project.findById(req.projectID).exec()
        for (let i = 0; i < req.tasksArr.length; i++) {
            if (!result.task.includes(req.tasksArr[i])) {
                result.task.pull(req.tasksArr[i])
            }
        }
        let resultFinal = await result.save();
        return resultFinal;
    }

    return null
}
const getAllProjectService = async (req) => {
    try {
        const { filter, limit, population } = aqp(req.query);
        let page = filter.page
        delete filter.page
        let skip = (page - 1) * limit
        let Projects = null
        Projects = await Project.find(filter).limit(limit).populate(population).skip(skip).exec();
        return Projects

    } catch (error) {
        console.log("err", error)
    }
}
const putUpdateProjectService = async (id, options) => {
    try {
        let result = await Project.updateOne({ _id: id }, options)
        return result;
    } catch (error) {
        console.log(error)
    }
}
const deleteProjectService = async (id) => {
    try {
        let result = await Project.deleteById({ _id: id })
        return result;
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createProjectService, getAllProjectService, putUpdateProjectService, deleteProjectService
}