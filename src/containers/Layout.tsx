import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { ReactNode } from "react";

const Layout = () => {
  return (
    <div>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};
export default Layout;
