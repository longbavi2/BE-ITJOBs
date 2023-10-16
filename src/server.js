const express = require('express')
const conFigViewEngine = require('./config/ViewEngine')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload');
const app = express()
const connection = require("./config/database")
require('dotenv').config()
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME
const cors = require("cors")
const cookieParser = require("cookie-parser")
//Config template engine
conFigViewEngine(app);
//config form data 
app.use(express.json()) // middleware 
app.use(express.urlencoded({ extended: true })) // for form data
app.use(cookieParser())
app.use(cors())
//config file upload
app.use(fileUpload());
//config file upload

app.use('/v1/api', apiRoutes)

//database
// connection();
const main = async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
main();



