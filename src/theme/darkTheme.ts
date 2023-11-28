import { ThemeOptions } from "@mui/material";
import { quicksand } from "./fonts";
import { exo } from "./fonts";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#34eb9e",
    },
    secondary: {
      main: "#7000ff",
    },
    background: {
      default: "#03181f",
    },
  },
  typography: { fontFamily: "Quicksand, Exo_2" },
};

export default darkTheme;
