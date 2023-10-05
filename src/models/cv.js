const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const cvSchema = new mongoose.Schema({
    idCompany: String,
    idJob: String,
    name: String,
    phone: String,
    email: String,
    statusRead: Boolean,
    description: String,
    linkProject: String,
    city: String,
},
    { timestamps: true }
);
cvSchema.plugin(mongoose_delete, { overrideMethods: true });
const Cv = mongoose.model('cv', cvSchema);
module.exports = Cv