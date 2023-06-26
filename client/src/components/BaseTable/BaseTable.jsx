import React from "react";
import {Box} from "@mui/material";
import TableConstructor from "../TableConstructor/TableConstructor";

const BaseTable = ({tableOptions, handlerAddClick}) => {
  return <Box>
    <TableConstructor
      options={tableOptions}
      handlerAddClick={handlerAddClick}
    />
  </Box>
};

export default BaseTable;