const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const citySchema = new mongoose.Schema({
    key: String,
    value: String
}
);
citySchema.plugin(mongoose_delete, { overrideMethods: true });
const City = mongoose.model('city', citySchema);
module.exports = City