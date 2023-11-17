import { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import FlexBetween from "../FlexBetweenBox";
import { typeColor } from "./TypeColor";
import Snackbar from "@mui/material/Snackbar";

const Pokemons = () => {
  const isNonMobileScreens = useMediaQuery(
    "(min-width:1000px) and (max-height:2160px)"
  );
  const [squad, setSquad] = useState([]);

  const getPokemon = async () => {
    // Get a random ID out of 386 Pokemons
    const randomId = Math.floor(Math.random() * 386) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    if (!res.ok) throw new Error("failed to fetch data");
    const newPokemon = await res.json();

    // Define a Pokemon in the squad array
    let collectedPokemon: Pokemon;

    // Check each collected Pokemon's ID for duplicates
    for (collectedPokemon of squad) {
      if (collectedPokemon.id === newPokemon.id) {
        handleDuplicateOpen();
        return;
      }
    }

    const updatedSquad: any = [...squad, newPokemon];
    setSquad(updatedSquad);

    // Triggers a message when squad is to be full
    if (squad.length >= 5) {
      handleFullOpen();
    }
  };

  // Capitalize first letter of Pokemon"s name
  const capFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Snackbar state for duplicate Pokemon
  const [openDuplicateSnackbar, setOpenDuplicateSnackbar] = useState(false);
  const handleDuplicateOpen = () => {
    setOpenDuplicateSnackbar(true);
  };
  const handleDuplicateClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenDuplicateSnackbar(false);
  };
  // Snackbar state for full squad
  const [openFullSnackbar, setOpenFullSnackbar] = useState(false);
  const handleFullOpen = () => {
    setOpenFullSnackbar(true);
  };
  const handleFullClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFullSnackbar(false);
  };

  return (
    <>
      <div>
        <Snackbar
          sx={{ height: "auto" }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={openDuplicateSnackbar}
          autoHideDuration={2000}
          onClose={handleDuplicateClose}
          message="Skipped duplicate Pokémon."
        />
      </div>
      <div>
        <Snackbar
          sx={{ height: "auto" }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={openFullSnackbar}
          autoHideDuration={3000}
          onClose={handleFullClose}
          message="Ready to rollout!"
        />
      </div>

      <Box
        gap={2}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        p={isNonMobileScreens ? 4 : 1}
      >
        {squad.length >= 6 ? (
          <>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setSquad([])}
              disabled={openFullSnackbar}
              sx={{
                padding: isNonMobileScreens ? "1.5rem 4rem" : "1rem 3rem",
                textTransform: "none",
                borderRadius: "6rem",
                boxShadow: "none",
                fontWeight: 600,
                color: "#00db9a",
                fontFamily: "quicksand",
                borderColor: "#00db9a",
                borderWidth: "2px",
                "&:hover": {
                  color: "#ed4e7e",
                  borderColor: "#ed4e7e",
                  borderWidth: "2px",
                  boxShadow: "none",
                },
                "&:click": {
                  color: "#f70289",
                  borderColor: "#f70289",
                  borderWidth: "2px",
                  boxShadow: "none",
                },
              }}
            >
              Clear Squad
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            disabled={squad.length >= 6}
            size="large"
            onClick={getPokemon}
            sx={{
              padding: isNonMobileScreens ? "1.5rem 4rem" : "1rem 3rem",
              textTransform: "none",
              borderRadius: "6rem",
              backgroundColor: "#00db9a",
              boxShadow: "none",
              fontWeight: 600,
              color: "#03181f",
              fontFamily: "quicksand",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#ed4e7e",
                boxShadow: "none",
              },
              "&:active": {
                color: "#fff",
                backgroundColor: "#f70289",
                boxShadow: "none",
              },
            }}
          >
            Catch Pokemon
          </Button>
        )}
      </Box>

      {squad.length >= 6 ? (
        <Typography
          textAlign={"center"}
          sx={{
            fontFamily: "quicksand",
            color: "#587f85",
            fontWeight: 600,
            fontSize: "0.75rem",
          }}
        >
          To catch new Pokemons, simply clear the current ones!
        </Typography>
      ) : (
        <Typography
          textAlign={"center"}
          sx={{
            fontFamily: "quicksand",
            color: "#587f85",
            fontWeight: 600,
            fontSize: "0.75rem",
          }}
        >
          {6 - squad.length} Pokéball{squad.length < 5 ? "s" : ""} remaining
        </Typography>
      )}

      {/* Pokemons Container */}
      <Box
        gap={isNonMobileScreens ? 4 : 1}
        pt={isNonMobileScreens ? 8 : 2}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        justifyItems={"center"}
        flexWrap={"wrap"}
      >
        {squad?.map((pokemon: any) => {
          return (
            <>
              {/* Pokemon Modal */}
              <Box
                flexBasis={isNonMobileScreens ? "12%" : "8%"}
                display={"flex"}
                flexDirection={"column"}
                alignContent={"center"}
                sx={{
                  border: "solid 2px #50646b",
                  borderRadius: "1rem",
                  p: isNonMobileScreens ? 1.5 : "0.25rem 0.75rem",
                }}
              >
                <img src={pokemon?.sprites.front_default} />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      pb: isNonMobileScreens ? 0.5 : 0,
                      textAlign: "center",
                    }}
                  >
                    {capFirstLetter(pokemon?.name)}
                  </Typography>
                </Box>

                <FlexBetween>
                  <Typography
                    sx={{ fontSize: isNonMobileScreens ? "0.75rem" : "0.5rem" }}
                  >
                    Type:
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: typeColor(pokemon?.types[0].type.name),
                      p: isNonMobileScreens ? "1% 8% 1.5% 8%" : "0.5% 8%",
                      borderRadius: "2rem",
                      fontSize: isNonMobileScreens ? "0.75rem" : "0.6rem",
                      fontWeight: 600,
                      m: "0.5rem 0",
                      color: "#fff",
                    }}
                  >
                    {pokemon?.types[0].type.name}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography
                    sx={{ fontSize: isNonMobileScreens ? "0.75rem" : "0.5rem" }}
                  >
                    {pokemon?.stats[0].stat.name}:
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "exo",
                      fontSize: isNonMobileScreens ? undefined : "0.75rem",
                    }}
                  >
                    {pokemon?.stats[0].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography
                    sx={{ fontSize: isNonMobileScreens ? "0.75rem" : "0.5rem" }}
                  >
                    {pokemon?.stats[1].stat.name}:
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "exo",
                      fontSize: isNonMobileScreens ? undefined : "0.75rem",
                    }}
                  >
                    {pokemon?.stats[1].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography
                    sx={{ fontSize: isNonMobileScreens ? "0.75rem" : "0.5rem" }}
                  >
                    {pokemon?.stats[2].stat.name}:
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "exo",
                      fontSize: isNonMobileScreens ? undefined : "0.75rem",
                    }}
                  >
                    {pokemon?.stats[2].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography
                    sx={{ fontSize: isNonMobileScreens ? "0.75rem" : "0.5rem" }}
                  >
                    {pokemon?.stats[3].stat.name}:
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "exo",
                      fontSize: isNonMobileScreens ? undefined : "0.75rem",
                    }}
                  >
                    {pokemon?.stats[3].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography
                    sx={{ fontSize: isNonMobileScreens ? "0.75rem" : "0.5rem" }}
                  >
                    {pokemon?.stats[4].stat.name}:
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "exo",
                      fontSize: isNonMobileScreens ? undefined : "0.75rem",
                    }}
                  >
                    {pokemon?.stats[4].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography
                    sx={{ fontSize: isNonMobileScreens ? "0.75rem" : "0.5rem" }}
                  >
                    {pokemon?.stats[5].stat.name}:
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "exo",
                      fontSize: isNonMobileScreens ? undefined : "0.75rem",
                    }}
                  >
                    {pokemon?.stats[5].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography
                    sx={{ fontSize: isNonMobileScreens ? "0.75rem" : "0.5rem" }}
                  >
                    Total:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: isNonMobileScreens ? "1.5rem" : "1rem",
                      fontWeight: 800,
                      fontFamily: "exo",
                    }}
                  >
                    {pokemon?.stats[0].base_stat +
                      pokemon?.stats[1].base_stat +
                      pokemon?.stats[2].base_stat +
                      pokemon?.stats[3].base_stat +
                      pokemon?.stats[4].base_stat +
                      pokemon?.stats[5].base_stat}
                  </Typography>
                </FlexBetween>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Pokemons;
