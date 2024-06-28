import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useProjectContext } from "../../../../contexts/ProjectContext";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Panel from "../../../../../../components/Panel";
import { ReactNode } from "react";
import { IProject } from "../../../../../../interfaces/IProject";
import { useNavigate } from "react-router-dom";
export const EditTables = () => {
  const navigate = useNavigate();
  const { currentProject, setCurrentProject, setProjectList } =
    useProjectContext();

  const handleChange = (field: string, value: ReactNode) => {
    setCurrentProject?.((prev) => ({ ...prev, [field]: value }));
  };

  const handlesSave = (currentProject: IProject | undefined) => {
    setProjectList?.((prev) =>
      prev.map((item) =>
        item.id === currentProject?.id ? currentProject : item
      )
    );
    navigate("/project");
  };

  return (
    <Box>
      <Box className="flex items-center">
        <ArrowCircleLeftIcon
          className="mr-2"
          fontSize="large"
        ></ArrowCircleLeftIcon>
        <Typography variant="h3">Edit Project</Typography>
      </Box>
      <Panel name={<Typography variant="h6">Edit</Typography>}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} item>
            <Grid container spacing={2}>
              <Grid container xs={12} item>
                <Grid className="flex" xs={2} item>
                  <label className="flex font-sans text-xs font-semibold  items-center">
                    ID
                  </label>
                </Grid>
                <Grid xs={10} item>
                  <TextField
                    fullWidth
                    disabled
                    id="filled-required"
                    label="Required"
                    defaultValue={currentProject?.id}
                    variant="filled"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              <Grid container xs={12} item>
                <Grid className="flex" xs={2} item>
                  <label className="flex font-sans text-xs font-semibold  items-center">
                    PIC
                  </label>
                </Grid>
                <Grid xs={10} item>
                  <TextField
                    fullWidth
                    disabled
                    id="filled-required"
                    label="Required"
                    defaultValue={currentProject?.userId}
                    variant="filled"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              <Grid container xs={12} item>
                <Grid className="flex" xs={2} item>
                  <label className="flex font-sans text-xs font-semibold  items-center">
                    POC
                  </label>
                </Grid>
                <Grid xs={10} item>
                  <TextField
                    fullWidth
                    id="filled-required"
                    label="Required"
                    defaultValue={currentProject?.title}
                    variant="filled"
                    onChange={(e) => handleChange("title", e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              <Grid container xs={12} item>
                <Grid className="flex" xs={2} item>
                  <label className="flex font-sans text-xs font-semibold  items-center">
                    Project No.
                  </label>
                </Grid>
                <Grid xs={10} item>
                  <TextField
                    fullWidth
                    id="filled-required"
                    label="Required"
                    defaultValue={currentProject?.body}
                    variant="filled"
                    onChange={(e) => handleChange("body", e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Button onClick={() => handlesSave(currentProject)}>edit</Button>
        </Grid>
      </Panel>
    </Box>
  );
};
