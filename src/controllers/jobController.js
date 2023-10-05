const { postJobService, getJobService, putUpdateJobService, deleteJobService } = require("../services/jobService")
module.exports = {
    postJobAPI: async (req, res) => {
        let result = await postJobService(req.body);
        return res.status(200).json(result)
    },
    getJobAPI: async (req, res) => {
        let result = await getJobService(req.query);
        return res.status(200).json(result)
    },
    putUpdateJobAPI: async (req, res) => {
        let options = req.body
        let id = req.body.id
        delete options.id
        let result = await putUpdateJobService(id, options);
        return res.status(200).json(result)
    },
    deleteJobAPI: async (req, res) => {
        let result = await deleteJobService(req.body.id);
        return res.status(200).json(result)
    }

}