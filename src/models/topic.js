const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const topicSchema = new mongoose.Schema({
    name: String
}, {
    timestamps: true
}
);
topicSchema.plugin(mongoose_delete, { overrideMethods: true });
const Topic = mongoose.model('topic', topicSchema);
module.exports = Topic