const { postCreateAnswerService, getAnswerService } = require("../services/answerService")
const getAnswerApi = async (req, res) => {
    let result = await getAnswerService(req)
    return res.status(201).json({
        errorCode: 0,
        data: result
    })
}

const postAnswerApi = async (req, res) => {
    let result = await postCreateAnswerService(req.body)
    return res.status(201).json({
        errorCode: 0,
        data: result
    })
}
module.exports = {
    getAnswerApi, postAnswerApi
}