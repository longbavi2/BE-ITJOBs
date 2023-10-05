


const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const answerSchema = new mongoose.Schema({
    userId: String,
    topicId: String,
    answers: Array,
}
);
answerSchema.plugin(mongoose_delete, { overrideMethods: true });
const Answer = mongoose.model('answer', answerSchema);
module.exports = Answer