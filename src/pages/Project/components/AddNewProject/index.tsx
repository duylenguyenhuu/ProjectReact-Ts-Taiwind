import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Panel from "../../../../components/Panel";
import { useProjectContext } from "../../contexts/ProjectContext";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { IProject } from "../../../../interfaces/IProject";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  userId: yup.number().required("This field must be required"),
  body: yup.string().required("This field must be required"),
  title: yup.string().required(),
});

export const AddNewProject = () => {
  const navigate = useNavigate();
  const { setProjectList, projectList } = useProjectContext();
  const [maxID, setMaxID] = useState(0);
  const formik = useFormik<IProject>({
    initialValues: {
      userId: 0,
      id: 0,
      title: "",
      body: "",
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values) => {
      const { ...rest } = values;
      rest.id = maxID;
      setProjectList?.((prev) => [...(prev || []), rest]);

      navigate("/project");
    },
  });

  projectList?.forEach((user) => {
    if (user.id > maxID) {
      setMaxID(user.id + 1);
    }
  });

  return (
    <Box>
      <Box className="flex items-center">
        <ArrowCircleLeftIcon className="mr-2" fontSize="large" />
        <Typography variant="h3">Add new Project</Typography>
      </Box>
      <Panel name={<Typography>Add</Typography>}>
        <Grid container spacing={2}>
          <Grid className="flex items-center" xs={6} sm={12} item>
            <Grid xs={2} item>
              <label>ID</label>
            </Grid>
            <Grid xs={10} item>
              <TextField
                sx={{ width: "50%" }}
                disabled
                value={maxID}
                label="ID"
                variant="filled"
              />
            </Grid>
          </Grid>
          <Grid className="flex items-center" xs={6} sm={12} item>
            <Grid xs={2} item>
              <label>PIC</label>
            </Grid>
            <Grid xs={10} item>
              <TextField
                name="userId"
                sx={{ width: "50%" }}
                label="Pic"
                variant="filled"
                value={formik.values.userId}
                helperText={formik.errors.userId}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid className="flex items-center" xs={6} sm={12} item>
            <Grid xs={2} item>
              <label>POC</label>
            </Grid>
            <Grid xs={10} item>
              <TextField
                name="title"
                sx={{ width: "50%" }}
                label="Poc"
                variant="filled"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid className="flex items-center" xs={6} sm={12} item>
            <Grid xs={2} item>
              <label>Project No.</label>
            </Grid>
            <Grid xs={10} item>
              <TextField
                name="body"
                sx={{ width: "50%" }}
                label="Project No."
                variant="filled"
                value={formik.values.body}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid className="flex justify-end" xs={6} sm={12} item>
            <Button variant="contained" onClick={formik.submitForm}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Panel>
    </Box>
  );
};
