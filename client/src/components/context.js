import React, { createContext, useState } from "react";
import { fetchEmployees } from "../actions/action";

export const DataContext = createContext(null);
const initialFormData = {
  name: "",
  email: "",
  age: "",
  department: "",
  phoneNumber: "",
};
export const DataProvider = ({ children }) => {
  const [data1, setData1] = useState(null);
  const [editForm, setEditForm] = useState(initialFormData);

  const updateData = async () => {
    let fresh = await fetchEmployees();
    if (fresh) setData1(fresh);
  };

  const editFormCall = (D) => {
    setEditForm(D);
  };

  return (
    <DataContext.Provider value={{ data1, editForm, updateData, editFormCall }}>
      {children}
    </DataContext.Provider>
  );
};
