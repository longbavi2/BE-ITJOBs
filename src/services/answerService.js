const aqp = require("api-query-params")
const Answer = require("../models/answer")
const getAnswerService = async (req) => {
    try {
        const { filter } = aqp(req.query);
        let result = await Answer.find(filter).exec();
        return result
    } catch (error) {
        console.log("Lỗi : ", error)
    }
}
const postCreateAnswerService = async (options) => {
    try {
        let result = await Answer.create(options);
        return result
    } catch (error) {
        console.log("Lỗi : ", error)
    }
}
module.exports = {
    getAnswerService, postCreateAnswerService
}
