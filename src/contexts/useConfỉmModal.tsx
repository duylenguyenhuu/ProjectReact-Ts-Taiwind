import { Box, Button, Modal, SxProps, Typography } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";

interface IConfirmModalContextProps {
  showConfirmModal?: (showConfirm: IShowModal) => void;
}

interface IShowModal {
  okText?: ReactNode;
  cancelText?: ReactNode;
  onOK?: () => void;
  onCancel?: () => void;
  title?: ReactNode;
  content?: ReactNode;
  showOkBtn?: boolean;
  showCancelBtn?: boolean;
  titleClassName?: string;
}

const ModalContext = createContext<IConfirmModalContextProps>({});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

export const ConfirmModalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<IShowModal>({});

  const showConfirmModal = ({
    showCancelBtn = true,
    showOkBtn = true,
    okText = "OK",
    cancelText = "Cancel",
    ...rest
  }: IShowModal) => {
    setModal({ showCancelBtn, showOkBtn, okText, cancelText, ...rest });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ showConfirmModal }}>
      {children}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {modal?.title && (
            <Typography
              variant="h4"
              component="h2"
              className={modal?.titleClassName}
            >
              {modal?.title}
            </Typography>
          )}

          {modal?.content && (
            <Typography sx={{ mt: 2 }}>{modal?.content}</Typography>
          )}
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
          >
            {modal.showCancelBtn && (
              <Button
                color="error"
                variant="contained"
                onClick={() => {
                  modal.onCancel && modal.onCancel();
                  handleClose();
                }}
              >
                {modal.cancelText}
              </Button>
            )}
            {modal.showOkBtn && (
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  modal.onOK && modal.onOK();
                  handleClose();
                }}
              >
                {modal.okText}
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </ModalContext.Provider>
  );
};

export const useConfirmModal = () => {
  return useContext(ModalContext);
};
