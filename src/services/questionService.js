const aqp = require("api-query-params")
const Question = require("../models/question")
const getQuestionService = async (req) => {
    try {
        const { filter } = aqp(req.query);
        let result = await Question.find(filter).exec();
        return result
    } catch (error) {
        console.log("Lỗi : ", error)
    }
}
const postCreateQuestionService = async (options) => {
    try {
        let result = await Question.create(options);
        return result
    } catch (error) {
        console.log("Lỗi : ", error)
    }

}
module.exports = {
    getQuestionService, postCreateQuestionService
}