const { getCompanyService, putCompanyService, loginCompanyService, registerCompanayService, deleteCompanyService,
    generateAccessToken, generateRefreshToken
} = require("../services/companyService")
const jwt = require("jsonwebtoken")
require('dotenv').config()

module.exports = {
    getCompanyAPI: async (req, res) => {
        let result = await getCompanyService(req.query);
        return res.status(200).json(result)
    },
    putUpdateCompanyAPI: async (req, res) => {
        let id = req.body.id
        delete req.body.id
        let result = await putCompanyService(id, req.body)
        return res.status(200).json(result)
    },
    postCompanyLoginAndRegsterAPI: async (req, res) => {
        if (req.body.type === "LOGIN") {
            console.log(req.body)
            const { email, password } = req.body
            const company = await loginCompanyService(email, password)
            if (company) {
                const accessToken = generateAccessToken(company)
                const refreshToken = generateRefreshToken(company)
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    path: "/",
                    sameSite: "none",
                    secure: false
                })
                return res.status(200).json({ company, accessToken })
            }
            else {
                return res.status(400).json("Login Failed")
            }
        }
        else if (req.body.type === "REGISTER") {
            delete req.body.type
            const resultRegister = await registerCompanayService(req.body)
            if (resultRegister) {
                return res.status(200).json(resultRegister)
            } else {
                return res.status(400).json("Register Failed")
            }
        }
        else {
            return res.status(400).json("Register Failed")
        }
    },
    deleteCompanyAPI: async (req, res) => {
        const id = req.body.id
        const result = await deleteCompanyService(id)
        if (result)
            return res.status(200).json(result)
        else {
            return res.status(400).json("Delete Failed")
        }
    },
    postRefreshTokenAPI: async (req, res) => {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) return res.status(400).json("Token is not valid")
        else {
            jwt.verify(refreshToken, process.env.SECRET_ACCESSTOKEN_KEY, (err, companny) => {
                if (err) return res.status(500).json(err)
                const newAccessToken = generateAccessToken(companny)
                const newRefreshToken = generateRefreshToken(companny)
                res.cookie("refreshToken", newRefreshToken, {
                    sameSite: true,
                    httpOnly: true,
                    path: "/",
                    secure: false
                })
                return res.status(200).json({ newAccessToken })
            })
        }
    }
}