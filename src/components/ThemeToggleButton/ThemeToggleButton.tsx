import React from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material";

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const {
    ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
  } = props;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <IconButton
        sx={{ mr: 2 }}
        title={
          theme.palette.mode === "dark"
            ? "Switch to Light Mode"
            : "Switch to Dark Mode"
        }
        aria-label={theme.palette.mode + " mode button"}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;
