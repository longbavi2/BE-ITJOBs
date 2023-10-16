const jwt = require("jsonwebtoken")
require('dotenv').config()
module.exports = {
    getAllCompany: async (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.SECRET_ACCESSTOKEN_KEY, (err, company) => {
                if (err) return res.status(401).json("You are auth not valid")
                req.company = company
                next()
            })
        } else {
            return res.status(401).json("You are not auth")
        }
    },
    deleteCompanyMiddleware: async (req, res, next) => {
        const token = req.headers.token
        const id = req.body.id
        if (token) {
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.SECRET_ACCESSTOKEN_KEY, (err, company) => {
                if (err) return res.status(401).json("You are auth not valid")
                req.company = company
                if (req.company.id === id || req.company.admin) {
                    next()
                } else {
                    return res.status(403).json("Delete Failed")
                }
            })
        } else {
            return res.status(401).json("You are not auth")
        }
    },

}