import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { ROUTE } from "../constants";
import Sidebar from "../components/sidebar/Sidebar";
import RoutesProject from "../pages/Project";
import RoutesEmployee from "./employee";

const RoutesContainer = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Sidebar>
        <Routes>
          <Route path={ROUTE.DASHBOARD} element={<Dashboard />} index />
          <Route path={ROUTE.CUSTOMER} element={<>customer</>} />
          <Route path={`${ROUTE.PROJECT}/*`} element={<RoutesProject />} />
          <Route path={`${ROUTE.EMPLOYEE}/*`} element={<RoutesEmployee />} />
        </Routes>
      </Sidebar>
    </Suspense>
  );
};
export default RoutesContainer;
