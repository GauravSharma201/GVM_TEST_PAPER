import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const StyledLabel = styled(InputLabel)`
  && {
    padding: 0 0.5rem;
    background: white;
  }
`;

const ResponsiveDropdown = ({ value, onChangeHandler, label, options }) => {
  const handleChange = (event) => {
    onChangeHandler(event.target.value);
  };
  return (
    <StyledFormControl>
      <StyledLabel id={`${label}-label`}>{label}</StyledLabel>
      <Select
        labelId={`${label}-label`}
        id={label}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default ResponsiveDropdown;
