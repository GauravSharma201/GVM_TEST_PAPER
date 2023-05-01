import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { age, department } from "../../utils/drpDwnData";
import validate from "../../utils/validation";
import ResponsiveDropdown from "./drpdwn";
import { DataContext } from "../context";
import { editEmployees, addEmployees } from "../../actions/action";
import "./form.css";

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  minWidth: "25vw",
  // '@media (min-width: 768px)': {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   gap: '2rem',
  //   padding: '2rem',
  // },
});

const initialFormData = {
  name: "",
  email: "",
  age: "",
  department: "",
  phoneNumber: "",
};
const ResponsiveForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errorData, setErrorData] = useState(initialFormData);
  const [act, setAct] = useState("add");
  const { updateData, editForm } = useContext(DataContext);

  const handleFormData = (event) => {
    let key = event.target.name,
      value = event.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (act === "update") {
      (async () => {
        let editRes = await editEmployees(formData);
        if (editRes.status === 200) {
          setFormData(initialFormData);
          updateData();
          setAct("add");
          alert("edit success!");
        } else {
          alert("edit failed, try again!");
        }
      })();
      return;
    }
    let valdtn = validate({
      name: formData.name,
      age: formData.age,
      email: formData.email,
      department: formData.department,
      phoneNumber: formData.phoneNumber,
    });
    setErrorData(valdtn);

    if (Object.values(valdtn).length === 0) {
      (async () => {
        let res1 = await addEmployees(formData);
        if (res1.status === 201) {
          setFormData(initialFormData);
          updateData();
          alert("employee added!");
        } else {
          alert("error adding employee!", res1.data.msg);
        }
      })();
    }
  };

  useEffect(() => {
    editForm.name && setAct("update");
    setFormData({ ...editForm });
  }, [editForm]);
  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        value={formData["name"]}
        onChange={handleFormData}
        name="name"
        sx={{ minWidth: "100%", flex: 1 }}
      />
      <SpanContainer msg={errorData.name} />
      <TextField
        label="Email"
        variant="outlined"
        value={formData["email"]}
        name="email"
        onChange={handleFormData}
        sx={{ minWidth: "100%", flex: 1 }}
      />
      <SpanContainer msg={errorData.email} />
      <ResponsiveDropdown
        value={formData["age"]}
        onChangeHandler={(v) => {
          setFormData({ ...formData, age: v });
        }}
        label="Select age"
        options={age.valArr}
      />
      <SpanContainer msg={errorData.age} />
      <TextField
        label="PhoneNumber"
        variant="outlined"
        value={formData["phoneNumber"]}
        onChange={handleFormData}
        name="phoneNumber"
        sx={{ minWidth: "100%", flex: 1 }}
      />
      <SpanContainer msg={errorData.phoneNumber} />
      <ResponsiveDropdown
        value={formData["department"]}
        onChangeHandler={(v) => {
          setFormData({ ...formData, department: v });
        }}
        label="Select department"
        options={department.valArr}
      />
      <SpanContainer msg={errorData.department} />
      <Button type="submit" variant="contained" sx={{ minWidth: "15ch" }}>
        Submit
      </Button>
    </FormContainer>
  );
};

function SpanContainer({ msg }) {
  return (
    <span className="errorTxt" style={{ display: msg ? "inline" : "none" }}>
      *{msg}
    </span>
  );
}

export default ResponsiveForm;
