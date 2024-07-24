import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "../../../../contexts/useSnackbar";

const EmployeeHeader = () => {
  const { showSnackbar } = useSnackbar();
  const searchEmployee = [
    { label: "The Shawshank Redemption" },
    { label: "The Godfather" },
    { label: "The Godfather:Part IT" },
  ];
  return (
    <Box className="mb-4">
      <Grid container spacing={2}>
        <Grid item xs={2} md={4}>
          <Typography variant="h3">My Employee</Typography>
        </Grid>
        <Grid className="flex justify-around gap-10" item xs={10} md={8}>
          <Button className="basis-[30%]" variant="contained">
            Delete Selected
          </Button>
          <Button
            className="basis-[30%]"
            variant="contained"
            onClick={() => {
              setTimeout(() => {
                showSnackbar({ message: "Add successfully" });
              }, 3000);
            }}
          >
            Add new Employee
          </Button>
          <Autocomplete
            className="basis-[30%]"
            options={searchEmployee}
            renderInput={(params) => (
              <TextField {...params} label="Search"></TextField>
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default EmployeeHeader;
