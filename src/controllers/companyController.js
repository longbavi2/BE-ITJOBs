const { postCompanyService, getCompanyService, putCompanyService } = require("../services/companyService")
const randomToken = require("../services/randomToken")
module.exports = {
    postCompanyAPI: async (req, res) => {
        let options = {
            ...req.body,
            token: randomToken(20)
        }
        let result = await postCompanyService(options);
        return res.status(200).json(result)
    },
    getCompanyAPI: async (req, res) => {
        let result = await getCompanyService(req.query);
        return res.status(200).json(result)
    },
    putUpdateCompanyAPI: async (req, res) => {
        let id = req.body.id
        delete req.body.id
        let result = await putCompanyService(id, req.body)
        return res.status(200).json(result)
    }

}