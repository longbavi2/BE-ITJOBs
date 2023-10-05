const Customer = require("../models/customer")
const createCustomerService = async (customerData) => {
    const { name, email, address, phone, image, description } = customerData
    try {
        const newCustomer = await Customer.create({
            name, email, address, phone, image, description
        })
        return newCustomer
    } catch (error) {
        return null
    }
}

const getAllCustomerService = async (filter, skip, limit, sort, projection, population) => {
    let customer = null
    try {
        customer = await Customer.find(filter).limit(limit).skip(skip).populate(population).exec();
        return customer

    } catch (error) {
        return error
    }
}
const putUpdateCustomerSerVice = async (id, options) => {
    try {
        let customerData = await Customer.updateOne({ _id: id }, options)
        return customerData;
    } catch (error) {
        return null
    }
}
const deleteACustomerService = async (id) => {
    try {
        let customerData = await Customer.deleteById({ _id: id })
        return customerData;
    } catch (error) {
        return null
    }
}

const deleteManyCustomerService = async (arr) => {

    try {
        let arrDelete = await Customer.delete({ _id: { $in: arr } });
        return arrDelete
    } catch (error) {
        console.log(error)
        return null
    }
}

module.exports = {
    createCustomerService,
    getAllCustomerService,
    putUpdateCustomerSerVice,
    deleteACustomerService,
    deleteManyCustomerService
}