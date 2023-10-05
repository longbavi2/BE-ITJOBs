const aqp = require("api-query-params")
const City = require("../models/city")
module.exports = {
    postCityService: async (options) => {
        try {
            let result = await City.create(options)
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    getCityService: async (options) => {
        try {
            const { filter } = aqp(options)
            let result = await City.find(filter).exec();
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    }
}