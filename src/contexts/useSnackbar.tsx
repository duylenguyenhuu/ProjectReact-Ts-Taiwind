import React, { ReactNode, createContext, useContext, useState } from "react";
import {
  Alert,
  AlertProps,
  Snackbar,
  SnackbarCloseReason,
  SnackbarProps,
} from "@mui/material";

interface ISnackbarContextProps {
  showSnackbar: (params: CustomSnackbarProps) => void;
  currentSnackbar: CustomSnackbarProps;
}

interface CustomSnackbarProps extends SnackbarProps {
  severity?: AlertProps["severity"];
  message: Required<SnackbarProps["message"]>;
}

const SnackbarContext = createContext<ISnackbarContextProps>({
  showSnackbar: () => {},
  currentSnackbar: {
    message: "",
  },
});

const defaultSnackbar: CustomSnackbarProps = {
  severity: "info",
  autoHideDuration: 5000,
  message: "",
};

export const SnackbarContextProvider: React.ComponentType<{
  children: ReactNode;
}> = ({ children }) => {
  const [snackbar, setSnackBar] =
    useState<CustomSnackbarProps>(defaultSnackbar);
  const { open, autoHideDuration, onClose, message, severity } = snackbar;

  const handleOnClose = (
    event: React.SyntheticEvent<Element> | Event,
    reason: SnackbarCloseReason
  ) => {
    onClose?.(event, reason);
    console.log("handleOnClose", reason);
    setSnackBar((prevSnackbar) => ({ ...prevSnackbar, open: false }));
  };

  const handleAlertOnClose = (event: React.SyntheticEvent) => {
    handleOnClose(event, "clickaway");
  };

  const showSnackbar = (newSnackbar: CustomSnackbarProps) => {
    setSnackBar(() => ({ ...defaultSnackbar, ...newSnackbar, open: true }));
  };

  return (
    <SnackbarContext.Provider
      value={{ showSnackbar, currentSnackbar: snackbar }}
    >
      {children}
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleOnClose}
      >
        <Alert
          onClose={handleAlertOnClose}
          severity={severity}
          variant="filled"
          className="font-semibold"
          sx={{ width: "100%", fontSize: "0.875rem" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
