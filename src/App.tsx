import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/them";
import RoutesContainer from "./routes";
import { ConfirmModalContextProvider } from "./contexts/useConfirmModal";
import { SnackbarContextProvider } from "./contexts/useSnackbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmModalContextProvider>
        <SnackbarContextProvider>
          <RoutesContainer />
        </SnackbarContextProvider>
      </ConfirmModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
