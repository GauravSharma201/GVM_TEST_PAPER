import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { DataContext } from "../context";
import { deleteEmployees } from "../../actions/action.js";

const EmployeeCardWrapper = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const EmployeeCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const EmployeeDetailsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
});

const EmployeeDetailsLabel = styled(Typography)({
  fontWeight: "bold",
  marginRight: "10px",
});

const EmployeeDetailsValue = styled(Typography)({
  marginRight: "20px",
});

const EmployeeCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "flex-end",
});

const EmployeeCard = ({ data, onEdit, onDelete }) => {
  const { editFormCall, updateData } = useContext(DataContext);
  let empNode = handleEmpDet(data);

  function handleEmpDet(data) {
    let arr = [];
    for (let key in data) {
      arr.push({ key: key, val: data[key] });
    }
    return arr;
  }
  function handleEdit() {
    editFormCall(data);
  }
  async function handleDelete() {
    let delFresh = await deleteEmployees(data);
    if (delFresh?.status === 200) {
      updateData();
      alert("employee deleted !");
    } else {
      alert("employee deletion failed!");
    }
  }
  return (
    <EmployeeCardWrapper>
      <EmployeeCardContent>
        {empNode?.map((e) => {
          return (
            <EmployeeDetailsWrapper>
              <EmployeeDetailsLabel>{e.key}</EmployeeDetailsLabel>
              <EmployeeDetailsValue>{e.val}</EmployeeDetailsValue>
            </EmployeeDetailsWrapper>
          );
        })}
      </EmployeeCardContent>
      <EmployeeCardActions>
        <Button onClick={() => handleEdit(data)}>Edit</Button>
        <Button onClick={() => handleDelete(data)}>Delete</Button>
      </EmployeeCardActions>
    </EmployeeCardWrapper>
  );
};

export default EmployeeCard;
