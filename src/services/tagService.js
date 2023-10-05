const aqp = require("api-query-params")
const Tag = require("../models/tag")
module.exports = {
    postTagService: async (options) => {
        try {
            let result = await Tag.create(options)
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    getTagService: async (options) => {
        try {
            const { filter } = aqp(options)
            let result = await Tag.find(filter).exec();
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    }
}