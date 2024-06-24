import { Box } from "@mui/material";
import { useProjectContext } from "../../../../contexts/ProjectContext";

export const EditTables = () => {
  const { currentProject } = useProjectContext();

  console.log(currentProject);
  return <Box>edit project</Box>;
};
