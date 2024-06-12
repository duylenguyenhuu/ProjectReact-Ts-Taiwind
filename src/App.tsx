import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/them";
import RoutesContainer from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesContainer />
    </ThemeProvider>
  );
}

export default App;
