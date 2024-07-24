import { Alert, Snackbar } from "@mui/material";
import React, { createContext, ReactNode } from "react";

const SnackbarContext = createContext({});

export const DemoSnackbarContextProvider: React.ComponentType<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <SnackbarContext.Provider value={}>
      {children}
      <Snackbar>
        <Alert severity="success" variant="filled">
          This is a success Alert
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
