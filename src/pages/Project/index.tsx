import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import ListProject from "./components/ListProject";
import { AddNewProject } from "./components/AddNewProject";
import { EditTables } from "./components/ListProject/components/EditTable";
import { ProjectContextProvider } from "./contexts/ProjectContext";
import { DemoSnackbarContextProvider } from "../../contexts/DemoUseSnackbar";

const RoutesProject = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <ProjectContextProvider>
        <DemoSnackbarContextProvider>
          <Routes>
            <Route path="/" element={<ListProject />} />
            <Route path="/addproject" element={<AddNewProject />} />
            <Route path="/:id" element={<EditTables />} />
          </Routes>
        </DemoSnackbarContextProvider>
      </ProjectContextProvider>
    </Suspense>
  );
};
export default RoutesProject;
