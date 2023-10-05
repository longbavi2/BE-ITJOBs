const aqp = require("api-query-params")
const Cv = require("../models/cv")
module.exports = {
    postCvService: async (options) => {
        try {
            let result = await Cv.create(options)
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    getCvService: async (options) => {
        try {
            const { filter } = aqp(options)
            let result = await Cv.find(filter).exec();
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    putUpdateCvService: async (id, options) => {
        try {
            let customerData = await Cv.updateOne({ _id: id }, options)
            return customerData;
        } catch (error) {
            console.log("er: ", error)
        }
    },
    deleteCvService: async (id) => {
        try {
            let result = await Cv.delete({ _id: id });
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    }
}