const { postTagService, getTagService } = require("../services/tagService")
module.exports = {
    postTagAPI: async (req, res) => {
        let result = await postTagService(req.body);
        return res.status(200).json(result)
    },
    getTagAPI: async (req, res) => {
        let result = await getTagService(req.query);
        return res.status(200).json(result)
    }

}