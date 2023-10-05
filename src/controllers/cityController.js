const { postCityService, getCityService } = require("../services/cityService")
module.exports = {
    postCityAPI: async (req, res) => {
        let result = await postCityService(req.body);
        return res.status(200).json(result)
    },
    getCityAPI: async (req, res) => {
        let result = await getCityService(req.query);
        return res.status(200).json(result)
    }

}