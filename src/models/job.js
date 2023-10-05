const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const jobSchema = new mongoose.Schema({
    idCompany: String,
    name: String,
    tags: Array,
    salary: String,
    description: String,
    status: Boolean,
    city: Array
},
    {
        timestamps: true
    }
);
jobSchema.plugin(mongoose_delete, { overrideMethods: true });
const Job = mongoose.model('job', jobSchema);
module.exports = Job