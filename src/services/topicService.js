const Topic = require("../models/topic")
const getTopicService = async () => {
    try {
        let result = await Topic.find({});
        return result
    } catch (error) {
        console.log("Lỗi : ", error)
    }
}
const postCreateTopicService = async (options) => {
    try {
        let result = await Topic.create(options);
        return result
    } catch (error) {
        console.log("Lỗi : ", error)
    }

}
module.exports = {
    getTopicService, postCreateTopicService
}