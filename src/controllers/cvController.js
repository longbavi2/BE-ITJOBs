const { postCvService, getCvService, putUpdateCvService, deleteCvService } = require("../services/cvService")
module.exports = {
    postCvAPI: async (req, res) => {
        let result = await postCvService(req.body);
        return res.status(200).json(result)
    },
    getCvAPI: async (req, res) => {
        let result = await getCvService(req.query);
        return res.status(200).json(result)
    },
    putUpdateCvAPI: async (req, res) => {
        let options = req.body
        let id = req.body.id
        delete options.id
        let result = await putUpdateCvService(id, options);
        return res.status(200).json(result)
    },
    deleteCvAPI: async (req, res) => {
        let result = await deleteCvService(req.body.id)
        return res.status(200).json(result)
    }

}