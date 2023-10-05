const Company = require("../models/company")
const aqp = require("api-query-params")

module.exports = {
    postCompanyService: async (options) => {
        try {
            let result = await Company.create(options)
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    getCompanyService: async (options) => {
        try {
            const { filter } = aqp(options)
            let result = await Company.find(filter).exec();
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    putCompanyService: async (id, options) => {
        try {
            let ressult = await Company.updateOne({ _id: id }, options)
            return ressult;
        } catch (error) {
            console.log("er: ", error)
        }
    },
}