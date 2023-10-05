const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: String,
    token: String
}, {
    timestamps: true
}
);
userSchema.plugin(mongoose_delete, { overrideMethods: true });
const User = mongoose.model('user', userSchema);
module.exports = User