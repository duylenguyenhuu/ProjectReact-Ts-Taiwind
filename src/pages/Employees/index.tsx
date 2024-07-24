import { Box } from "@mui/material";
import ListTable from "./components/listTable";
import EmployeeHeader from "./components/header/inndex";

export const Employee = () => {
  return (
    <Box>
      <EmployeeHeader />
      <ListTable />
    </Box>
  );
};
