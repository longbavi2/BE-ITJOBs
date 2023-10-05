// const mongoose = require("mongoose")
// const mongoose_delete = require("mongoose-delete")

// const projectSchema = new mongoose.Schema({
//     name: String,
//     startDate: String,
//     endDate: String,
//     description: String,
// })
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     city: String,
// });

// const tasksSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         requied: true
//     },
//     description: String,
//     usersInfor: userSchema,
//     projectInfor: projectSchema,
//     status: String,
//     start: String,
//     end: String
// })
// tasksSchema.plugin(mongoose_delete, { overrideMethods: true });
// const Task = mongoose.model('task', tasksSchema);
// module.exports = Task
