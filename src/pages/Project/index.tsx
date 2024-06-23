import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import ListProject from "./components/ListProject";
import { AddNewProject } from "./components/AddNewProject";
import { EditTables } from "./components/ListProject/components/EditTable";

const RoutesProject = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        <Route path="/" element={<ListProject />} />
        <Route path="/addproject" element={<AddNewProject />} />
        <Route path="/:id" element={<EditTables />} />
      </Routes>
    </Suspense>
  );
};
export default RoutesProject;
