import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import EmployeeCard from "../card/card.js";
import { fetchEmployees } from "../../actions/action.js";
import { DataContext } from "../context.js";

const GridWrapper = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const GridComponent = () => {
  const [empData, setEmpData] = useState(null);
  const { data1 } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      console.log("grid component update..");
      const data = await fetchEmployees();
      setEmpData(data);
    };
    fetchData();
    // if (!empData) {
    // }
  }, [data1]);
  return (
    <GridWrapper container spacing={2}>
      {empData &&
        empData.map((data, index) => {
          console.log("mapping data..", data);
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <EmployeeCard data={data} />
            </Grid>
          );
        })}
    </GridWrapper>
  );
};

export default GridComponent;
