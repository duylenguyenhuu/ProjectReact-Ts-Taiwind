import { Box } from "@mui/material";
import { useProjectReducer } from "../../../../reducers/ProjectReducer";

export const EditTables = () => {
  const [state] = useProjectReducer();

  console.log(state);

  return <Box>hedsfdsf sdfsdf sdf sdf sd f sd f sd llo</Box>;
};
