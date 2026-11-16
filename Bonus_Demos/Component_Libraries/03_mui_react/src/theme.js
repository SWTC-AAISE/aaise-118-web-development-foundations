import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00767d",
      dark: "#005a60",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e0a126",
      dark: "#9a6800",
    },
    background: {
      default: "#edf3f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#23313c",
      secondary: "#526470",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 750,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      letterSpacing: 0,
      textTransform: "none",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: "3px solid #e0a126",
            outlineOffset: "3px",
          },
        },
      },
    },
  },
});

export default theme;
