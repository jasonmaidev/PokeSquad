import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import { TbPokeball } from "react-icons/tb";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import FlexBetween from "../FlexBetweenBox";

export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const Header = (props: HeaderProps) => {
  const { ColorModeContext } = props;

  return (
    <Box
      position="static"
      sx={{
        margin: "2rem 10%",
        padding: "1% 2%",
        boxShadow: "none",
        border: "solid 2px #50646b",
        borderRadius: "3rem",
      }}
    >
      <Container maxWidth="xl">
        <FlexBetween>
          <Box
            gap={1}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <TbPokeball size={"1.25rem"} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "quicksand",
                fontWeight: 900,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              PokéSquad
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                // mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "quicksand",
                fontSize: "0.75rem",
                fontWeight: 900,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PokéSquad
            </Typography>
          </Box>

          <ThemeToggleButton ColorModeContext={ColorModeContext} />
        </FlexBetween>
      </Container>
    </Box>
  );
};
export default Header;
