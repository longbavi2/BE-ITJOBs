const Company = require("../models/company")
const aqp = require("api-query-params")
const jwt = require("jsonwebtoken")
module.exports = {
    postCompanyService: async (options) => {
        try {
            let result = await Company.create(options)
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    getCompanyService: async (options) => {
        try {
            const { filter } = aqp(options)
            let result = await Company.find(filter).exec();
            return result
        } catch (error) {
            console.log("er: ", error)
        }
    },
    putCompanyService: async (id, options) => {
        try {
            let ressult = await Company.updateOne({ _id: id }, options)
            return ressult;
        } catch (error) {
            console.log("er: ", error)
        }
    },
    loginCompanyService: async (email, password) => {
        try {
            const checkEmail = await Company.findOne({ email: email }).exec();
            console.log(checkEmail)
            if (!checkEmail) return null
            const company = checkEmail.password === password ? checkEmail : null
            return company
        } catch (error) {
            console.log(error)
        }
    },
    registerCompanayService: async (obj) => {
        try {
            const checkEmail = await Company.findOne({ email: obj.email }).exec();
            if (checkEmail) return null
            else {
                const newCompany = await Company.create(obj)
                return newCompany
            }
        } catch (error) {
            console.log(error)
        }
    },
    deleteCompanyService: async (id) => {
        try {
            const result = await Company.delete({ _id: id })
            return result
        } catch (error) {
            console.log("Error:", error)
        }
    },
    generateAccessToken: (company) => {
        return jwt.sign({ _id: company._id, admin: false }, process.env.SECRET_ACCESSTOKEN_KEY, { expiresIn: '24h' });
    },
    generateRefreshToken: (company) => {
        return jwt.sign({ _id: company._id, admin: false }, process.env.SECRET_ACCESSTOKEN_KEY, { expiresIn: '365d' });
    }
}