const { getAllUsers, getEditUserById, updateUser, daleteUserById, createNewUsers } = require("../services/CRUDService")
const User = require("../models/user")
const getHomepage = async (req, res) => {
    const results = await User.find({})
    return res.render('home.ejs', { listUsers: results });
}
const createNewUser = (req, res) => {
    return res.render('create.ejs')
}
const createUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    await User.create({
        email, name, city
    })
    res.redirect('/')
}
const updateUserById = async (req, res) => {
    const id = req.params.id;
    const result = await User.findById(id).exec();
    let user = result ? result : {};
    return res.render('edit.ejs', { editUser: user })
}
const postUpdateUser = async (req, res) => {
    let userId = req.body.userId
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    res.redirect('/')
}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    await User.deleteOne({ _id: userId });
    res.redirect('/')
}
module.exports = {
    getHomepage, createUser, createNewUser, updateUserById, postUpdateUser, postDeleteUser
}