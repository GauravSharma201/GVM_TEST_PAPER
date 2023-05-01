const employee = require("../models/employeeModel.js");

async function getAllEmployees(req, res, next) {
  try {
    let response, msg;
    response = await employee.find({}, { __v: 0 });
    response ? (msg = "data fetched!") : (msg = "nothing to show");

    res.status(200).json({ msg, payload: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    return;
  }
}

async function addEmployee(req, res, next) {
  try {
    let { name, email, age, phoneNumber, department } = req.body;
    let result = check_fields(req.body, res);
    if (!result) return;
    let response = await employee.create({
      name,
      email,
      age,
      phoneNumber,
      department,
    });
    res.status(201).json({ msg: "employee added!", payload: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    return;
  }
}

async function updateEmployee(req, res, next) {
  try {
    let { _id } = req.body;
    if (!_id) res.status(400).json({ msg: "employee id not found!" });
    let result = check_fields(req.body, res);
    if (!result) return;
    let response = await employee.findByIdAndUpdate(_id, req.body, {
      new: true,
      projection: { __v: 0 },
    });
    res.status(200).json({ msg: "employee updated!", payload: response });
  } catch (error) {
    let msg = "",
      val = error.value;
    console.log(error);
    if (error.path == "_id") {
      msg = "not a valid id";
      val = error.value.id;
    }
    res.status(500).json({ msg: msg, path: error.path, value: val });
    return;
  }
}

async function deleteEmployee(req, res, next) {
  try {
    let _id = req.params._id;
    if (!_id) {
      res.status(400).json({ msg: "employee id not found!" });
      return;
    }
    let result = check_fields(req.body, res);
    if (!result) return;
    let response = await employee.findByIdAndRemove(_id);
    !response && res.status(400).json({ msg: "employee not found!" });
    res.status(200).json({ msg: "employee updated!", payload: response });
  } catch (error) {
    let msg = "",
      val = error.value;
    console.log(error);
    if (error.path == "_id") {
      msg = "not a valid id";
      val = error.value.id;
    }
    res.status(500).json({ msg: msg, path: error.path, value: val });
    return;
  }
}

function check_fields(data, res) {
  // only takes required fields...
  let err = [],
    result = true;
  if (!data) res.status(400).json({ msg: "no data recieved!" });
  for (let key in data) {
    if (!data[key]) err.push({ field: key, msg: `${key} field is required!` });
  }
  if (err.length > 0) {
    res.status(400).json({ msg: "error in fields input", payload: err });
    result = false;
  }
  return result;
}

module.exports = {
  getAllEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
};
