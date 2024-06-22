import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/them";
import RoutesContainer from "./routes";
import { ConfirmModalContextProvider } from "./contexts/useConfỉmModal";

function App() {
  return (
    <ConfirmModalContextProvider>
      <ThemeProvider theme={theme}>
        <RoutesContainer />
      </ThemeProvider>
    </ConfirmModalContextProvider>
  );
}

export default App;
