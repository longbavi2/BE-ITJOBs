const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const companySchema = new mongoose.Schema({
    companyName: String,
    phone: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: String,
    quantityPeople: String,
    description: String,
    detail: String,
    address: String,
    workingTime: String,
    website: String
}, { timestamps: true }
);
companySchema.plugin(mongoose_delete, { overrideMethods: true });
const Company = mongoose.model('company', companySchema);
module.exports = Company