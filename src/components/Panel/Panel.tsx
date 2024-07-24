import { Box } from "@mui/material";
import { ReactNode } from "react";

interface IPanelProps {
  name?: ReactNode;
  children: ReactNode;
}

const Panel = ({ name, children }: IPanelProps) => {
  return (
    <Box>
      <Box
        className="p-3 rounded-t-2xl"
        sx={{
          background: (theme) => theme.palette.primary["200"],
          color: "#fff",
        }}
      >
        {name}
      </Box>
      <Box
        className="p-5 border-2 rounded-b-2xl border-solid"
        sx={{ borderColor: "#cccccc", borderTop: "none" }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Panel;
