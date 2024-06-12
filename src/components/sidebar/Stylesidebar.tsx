import { SxProps, Theme } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

export const sidebarStyles: SxProps<Theme> = {
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    background: (theme) => `${(theme.palette.primary as ColorPartial)["200"]}`,
    boxSizing: "#fff",
  },
  ".MuiButtonBase-root:hover": {
    background: "#fff !important",
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    color: (theme) => `${(theme.palette.primary as ColorPartial)["200"]} `,
  },
  ".Mui-selected svg": {
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    color: (theme) => `${(theme.palette.primary as ColorPartial)["200"]} `,
  },

  ".MuiListItem-root:hover svg": {
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    color: (theme) => `${(theme.palette.primary as ColorPartial)["200"]} `,
  },
};
export const styleHover: SxProps<Theme> = {
  background: "#fff",
  borderTopLeftRadius: 999,
  borderBottomLeftRadius: 999,
  color: (theme) => `${(theme.palette.primary as ColorPartial)["200"]} `,
  ".css-196n7va-MuiSvgIcon-root": {
    color: "pink",
  },
};
