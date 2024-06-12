import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const listProject = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2} md={5}>
          <Typography variant="h3" gutterBottom>
            Project
          </Typography>
        </Grid>
        <Grid item className="flex justify-around" xs={10} md={7}>
          <Button variant="outlined" disabled sx={{ width: "300px" }}>
            Delete Selected
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ width: "300px" }}
            onClick={() => navigate("./addproject")}
          >
            Add New Project
          </Button>
          <Autocomplete
            sx={{ width: "300px" }}
            disablePortal
            id="combo-box-demo"
            options={listProject}
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
