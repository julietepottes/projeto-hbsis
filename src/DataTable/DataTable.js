import React from "react";
import { DataTable } from "@hbsis.uikit/react";
import { columns, data } from "./data";
import DataTableStyled from "./DataTableStyled";

const DataTableUsage = () => {
  return (
    <DataTableStyled>
      <DataTable columns={columns} data={data} />
    </DataTableStyled>
  );
};

export default DataTableUsage;
