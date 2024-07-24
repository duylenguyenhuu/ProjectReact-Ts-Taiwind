import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ISnackbarContextProps {
  showSnackbar: (params: CustomSnackbarProps) => void;
  currentSnackbar: CustomSnackbarProps;
}

interface CustomSnackbarProps extends SnackbarProps {
  severity?: AlertProps["severity"];
  message: Required<SnackbarProps["message"]>;
  variant?: AlertProps["variant"];
}

const DemoSnackbarContext = createContext<ISnackbarContextProps>({
  showSnackbar: () => {},
  currentSnackbar: {
    message: "",
  },
});

const defaultSnackbar: CustomSnackbarProps = {
  severity: "info",
  autoHideDuration: 5000,
  message: "",
  anchorOrigin: { vertical: "bottom", horizontal: "left" },
};

export const DemoSnackbarContextProvider: React.ComponentType<{
  children: ReactNode;
}> = ({ children }) => {
  const [snackbar, setSnackbar] =
    useState<CustomSnackbarProps>(defaultSnackbar);
  const { open, autoHideDuration, onClose, message, severity, anchorOrigin } =
    snackbar;

  const showSnackbar = (newSnackbar: CustomSnackbarProps) => {
    setSnackbar(() => ({ ...defaultSnackbar, ...newSnackbar, open: true }));
  };

  return (
    <DemoSnackbarContext.Provider value={{ currentSnackbar: snackbar }}>
      {children}
      <Snackbar open={open} anchorOrigin={anchorOrigin}>
        <Alert severity="success" variant="filled">
          This is a success Alert
        </Alert>
      </Snackbar>
    </DemoSnackbarContext.Provider>
  );
};

export const useDemoSnackbar = () => {
  return useContext(DemoSnackbarContext);
};
