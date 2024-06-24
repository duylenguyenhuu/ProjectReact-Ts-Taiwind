import { createContext, ReactNode, useContext, useState } from "react";
import { IProject } from "../../../../interfaces/IProject";

interface IProjectContext {
  projectList?: IProject[];
  setProjectList?: React.Dispatch<React.SetStateAction<IProject[]>>;
  currentProject?: IProject;
  setCurrentProject?: React.Dispatch<
    React.SetStateAction<IProject | undefined>
  >;
}

const ProjectContext = createContext<IProjectContext>({});

export const ProjectContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [projectList, setProjectList] = useState<IProject[]>([]);
  const [currentProject, setCurrentProject] = useState<IProject>();

  return (
    <ProjectContext.Provider
      value={{ currentProject, setCurrentProject, projectList, setProjectList }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
