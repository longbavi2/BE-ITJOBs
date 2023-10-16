const express = require('express');
// const { postUserLoginAPI, postUserRegisterAPI, putUpdateUserAPI, deleteUserAPI } = require("../controllers/userController")
// const { getTopicApi, postTopicApi } = require("../controllers/topicController")
// const { getQuestionApi, postQuestionApi } = require("../controllers/questionController")
const { postAnswerApi, getAnswerApi } = require("../controllers/answerController")
const { getCompanyAPI, putUpdateCompanyAPI, postCompanyLoginAndRegsterAPI, deleteCompanyAPI, postRefreshTokenAPI } = require("../controllers/companyController")
const { postTagAPI, getTagAPI } = require("../controllers/tagController")
const { getCityAPI, postCityAPI } = require("../controllers/cityController")
const { getJobAPI, postJobAPI, putUpdateJobAPI, deleteJobAPI } = require("../controllers/jobController")
const { postCvAPI, getCvAPI, putUpdateCvAPI, deleteCvAPI } = require("../controllers/cvController")
const { getAllCompany, deleteCompanyMiddleware } = require("../middleware/authMiddleware")
const apiRouter = express.Router()
// user
// apiRouter.post('/users/', postUserLoginAPI)
// apiRouter.post('/users/', postUserRegisterAPI)
// apiRouter.put('/users', putUpdateUserAPI)
// apiRouter.delete('/users', deleteUserAPI)
//user
//topic
// apiRouter.get('/topics', getTopicApi)
// apiRouter.post('/topics', postTopicApi)
//topic
//question
// apiRouter.get('/questions', getQuestionApi)
// apiRouter.post('/questions', postQuestionApi)
//question

//answer
// apiRouter.get('/answers', getAnswerApi)
// apiRouter.post('/answers', postAnswerApi)
//answer









//company
apiRouter.get('/companys', getCompanyAPI)
apiRouter.post('/companys', postCompanyLoginAndRegsterAPI)
apiRouter.put('/companys', putUpdateCompanyAPI)
apiRouter.delete('/companys', deleteCompanyMiddleware, deleteCompanyAPI)
apiRouter.post('/companys/refresh', postRefreshTokenAPI)

//company
//tag
apiRouter.get('/tags', getTagAPI)
apiRouter.post('/tags', postTagAPI)
//tag

//city
apiRouter.get('/citys', getCityAPI)
apiRouter.post('/citys', postCityAPI)
//city

//job
apiRouter.get('/jobs', getJobAPI)
apiRouter.post('/jobs', postJobAPI)
apiRouter.put('/jobs', putUpdateJobAPI)
apiRouter.delete('/jobs', deleteJobAPI)

//job

//CV
apiRouter.get('/cvs', getCvAPI)
apiRouter.post('/cvs', postCvAPI)
apiRouter.put('/cvs', putUpdateCvAPI)
apiRouter.delete('/cvs', deleteCvAPI)

//Cv




module.exports = apiRouter;