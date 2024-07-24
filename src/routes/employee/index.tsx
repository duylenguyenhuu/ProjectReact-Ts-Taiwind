import { Route, Routes } from "react-router-dom";
import { Employee } from "../../pages/Employees";
import { EmployeeContextProvider } from "../../pages/Employees/context";
// import { ActionEditEmployee } from "../../pages/Employees/components/listTable/actionEdit";

const RoutesEmployee = () => {
  return (
    <EmployeeContextProvider>
      <Routes>
        <Route path="/" element={<Employee />} />
        {/* <Route path="/:id" element={<ActionEditEmployee />} /> */}
      </Routes>
    </EmployeeContextProvider>
  );
};
export default RoutesEmployee;
