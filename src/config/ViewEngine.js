const express = require('express')
const path = require('path')
const conFigViewEngine = (app) => {
    //Config template engine
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    //config static file: css,js,image
    app.use(express.static(path.join('./src', 'public')));
}
module.exports = conFigViewEngine;
