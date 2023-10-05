const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const tagSchema = new mongoose.Schema({
    key: String,
    value: String
}
);
tagSchema.plugin(mongoose_delete, { overrideMethods: true });
const Tag = mongoose.model('tag', tagSchema);
module.exports = Tag