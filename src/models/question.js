const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const questionSchema = new mongoose.Schema({
    topicId: String,
    question: String,
    answers: Array,
    correctAnswer: String
}
);
questionSchema.plugin(mongoose_delete, { overrideMethods: true });
const Question = mongoose.model('question', questionSchema);
module.exports = Question