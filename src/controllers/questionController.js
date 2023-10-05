const { postCreateQuestionService, getQuestionService } = require("../services/questionService")
const getQuestionApi = async (req, res) => {
    let result = await getQuestionService(req)
    return res.status(201).json({
        errorCode: 0,
        data: result
    })
}

const postQuestionApi = async (req, res) => {
    let result = await postCreateQuestionService(req.body)
    return res.status(201).json({
        errorCode: 0,
        data: result
    })
}
module.exports = {
    getQuestionApi, postQuestionApi
}