import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import ListProject from "./components/ListProject";
import { AddNewProject } from "./components/AddNewProject";

const RoutesProject = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        <Route path="/" element={<ListProject />} />
        <Route path="/addproject" element={<AddNewProject />} />
      </Routes>
    </Suspense>
  );
};
export default RoutesProject;
