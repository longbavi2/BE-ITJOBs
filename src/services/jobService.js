const aqp = require("api-query-params")
const Job = require("../models/job")
module.exports = {
    postJobService: async (options) => {
        try {
            let result = await Job.create(options)
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    getJobService: async (options) => {
        try {
            const { filter } = aqp(options)
            let result = await Job.find(filter).exec();
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    putUpdateJobService: async (id, options) => {
        try {
            let ressult = await Job.updateOne({ _id: id }, options)
            return ressult;
        } catch (error) {
            console.log("er: ", error)
        }
    },
    deleteJobService: async (id) => {
        try {
            let result = await Job.delete({ _id: id });
            return result
        } catch (error) {
            console.log(error)
            console.log("er: ", error)
        }
    }
}