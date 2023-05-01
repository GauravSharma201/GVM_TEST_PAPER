const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    "name":{
        type:String,
        required:[true,'name is required, please enter!']
    },
    "email":{
        type:String,
        required:[true,'email is required, please enter!']
    },
    "age":{
        type:String,
        required:[true,'age is required, please enter!']
    },
    "phoneNumber":{
        type:String,
        required:[true,'address is required, please enter!']
    },
    "department":{
        type:String,
        required:[true,'department is required, please enter!']
    },
});

module.exports = new mongoose.model('employee',employeeSchema);