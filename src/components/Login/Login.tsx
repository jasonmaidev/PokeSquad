import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Box, Typography } from "@mui/material";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 600,
            color: "inherit",
          }}
        >
          Please log in to get your Pokemons
        </Typography>
        <br />
        <Button
          variant={"contained"}
          color={"success"}
          onClick={() => signIn()}
          sx={{
            fontFamily: "monospace",
            fontWeight: 600,
            color: "inherit",
            textTransform: "none",
          }}
        >
          Sign in
        </Button>
      </Box>
    </>
  );
};

export default Login;
