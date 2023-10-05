const { postCreateTopicService, getTopicService } = require("../services/topicService")
const getTopicApi = async (req, res) => {
    let result = await getTopicService()
    return res.status(201).json({
        errorCode: 0,
        data: result
    })
}

const postTopicApi = async (req, res) => {
    let result = await postCreateTopicService(req.body)
    return res.status(201).json({
        errorCode: 0,
        data: result
    })
}
module.exports = {
    getTopicApi, postTopicApi
}