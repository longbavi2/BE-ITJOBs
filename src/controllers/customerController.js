const Customer = require("../models/customer")
const aqp = require("api-query-params")
const
    { uploadSingleToMultipleFileApi } = require("../services/uploadFileServices")
const
    { createCustomerService,
        getAllCustomerService,
        putUpdateCustomerSerVice,
        deleteACustomerService, deleteManyCustomerService
    } = require("../services/customerService")
const postCreateCustomer = async (req, res) => {
    let urlPath = ""
    file = req.files.image;
    const { name, email, address, phone, image, description } = req.body
    if (!req.files || Object.keys(req.files).length === 0) {
        //not dothing
    } else {
        let result = await uploadSingleToMultipleFileApi(file);
        urlPath = result[0].path
        let customerData = {
            name, email, address, phone, image: urlPath, description
        }
        let newCustomer = await createCustomerService(customerData)
        return res.status(201).json({
            errorCode: 0,
            data: newCustomer
        })
    }
}
const getCustomerApi = async (req, res) => {
    const convertObjectToString = (obj) => {
        var str = '';
        for (let key in obj) {
            str += `&${key}=${obj[key]}`
        }
        return str.slice(1);
    }
    let customer = null
    let page = req.query.page
    const { filter, limit, sort, projection, population } = aqp(req.query);
    let skip = (page - 1) * limit
    customer = await getAllCustomerService(filter, skip, limit, sort, projection, population);

    return res.status(200).json({
        EC: 0,
        Data: customer
    })
}
const putUpdateCustomerApi = async (req, res) => {
    const { id, name, email, address, phone, description } = req.body
    const options = {
        id, name, email, address, phone, description
    }
    let customerData = await putUpdateCustomerSerVice(id, options)
    return res.status(200).json({
        EC: 0,
        Data: customerData
    })
}
const deleteACustomerApi = async (req, res) => {
    const { id } = req.body
    let customerData = await deleteACustomerService(id)
    return res.status(200).json({
        EC: 0,
        Data: customerData
    })
}
const deleteManyCustomerApi = async (req, res) => {
    let arr = req.body.CustomerId
    let arrDelete = await deleteManyCustomerService(arr)
    return res.status(200).json({
        EC: 0,
        Data: arrDelete
    })
}

module.exports = {
    postCreateCustomer,
    getCustomerApi,
    putUpdateCustomerApi,
    deleteACustomerApi,
    deleteManyCustomerApi,
}