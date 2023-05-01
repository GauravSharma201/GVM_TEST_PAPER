import axios from "axios";

const BaseUrl = "http://localhost:5000";
export async function fetchEmployees() {
  try {
    let res = await axios.get(BaseUrl + "/home");

    return res.data.payload;
  } catch (error) {
    console.log("fetch empl err:", error);
  }
}

export async function editEmployees(data) {
  try {
    let res = await axios.put(BaseUrl + "/update", data);
    return res;
  } catch (error) {
    console.log("edit empl err:", error);
  }
}

export async function addEmployees(data) {
  try {
    let res = await axios.post(BaseUrl + "/add", data);
    return res;
  } catch (error) {
    console.log("add empl err:", error);
  }
}

export async function deleteEmployees(data) {
  try {
    let res = await axios.delete(BaseUrl + `/delete/${data._id}`);
    return res;
  } catch (error) {
    console.log("delete empl err:", error);
  }
}
