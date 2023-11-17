import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import FlexBetween from "../FlexBetweenBox";
import { typeColor } from "./TypeColor";
import { getRandomIds } from "./RandomIds";

const Pokemons = () => {
  const [squad, setSquad] = useState([]);

  const clearSquad = () => {
    setSquad([]);
  };

  const getPokemon = async () => {
    const randomIds = getRandomIds();

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomIds[0]}`
    );
    if (!res.ok) throw new Error("failed to fetch data");
    const pokemonData = await res.json();
    const updatedSquad: any = [...squad, pokemonData];
    setSquad(updatedSquad);
  };

  const capFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Box
        gap={2}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        p={4}
      >
        {squad.length >= 6 ? (
          <>
            <Button
              variant="contained"
              disabled={squad.length >= 6}
              size="large"
              onClick={getPokemon}
              sx={{
                padding: "1.5rem 4rem",
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
              }}
            >
              Catch Pokemon
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={clearSquad}
              sx={{
                padding: "1.5rem 4rem",
                textTransform: "none",
                borderRadius: "6rem",
                // backgroundColor: "#00db9a",
                boxShadow: "none",
                fontWeight: 600,
                color: "#00db9a",
                fontFamily: "quicksand",
                borderColor: "#00db9a",
                borderWidth: "2px",
                "&:hover": {
                  color: "#ed4e7e",
                  // backgroundColor: "#ed4e7e",
                  borderColor: "#ed4e7e",
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
              padding: "1.5rem 4rem",
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
          Clear the current squad to catch new ones!
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
        gap={4}
        pt={8}
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
                flexBasis={"12%"}
                display={"flex"}
                flexDirection={"column"}
                alignContent={"center"}
                sx={{
                  border: "solid 2px #50646b",
                  borderRadius: "1rem",
                  p: 1.5,
                }}
              >
                <img src={pokemon?.sprites.front_default} />

                <Box>
                  <Typography
                    sx={{ fontWeight: 600, pb: 0.5, textAlign: "center" }}
                  >
                    {capFirstLetter(pokemon?.name)}
                  </Typography>
                </Box>

                <FlexBetween>
                  <Typography sx={{ fontSize: "0.75rem" }}>Type:</Typography>
                  <Typography
                    sx={{
                      backgroundColor: typeColor(pokemon?.types[0].type.name),
                      p: "1% 8% 1.5% 8%",
                      borderRadius: "2rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      m: "0.5rem 0",
                      color: "#fff",
                    }}
                  >
                    {pokemon?.types[0].type.name}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {pokemon?.stats[0].stat.name}:
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {pokemon?.stats[0].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {pokemon?.stats[1].stat.name}:
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {pokemon?.stats[1].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {pokemon?.stats[2].stat.name}:
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {pokemon?.stats[2].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {pokemon?.stats[3].stat.name}:
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {pokemon?.stats[3].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {pokemon?.stats[4].stat.name}:
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {pokemon?.stats[4].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {pokemon?.stats[5].stat.name}:
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {pokemon?.stats[5].base_stat}
                  </Typography>
                </FlexBetween>

                <FlexBetween>
                  <Typography sx={{ fontSize: "0.75rem" }}>Total:</Typography>
                  <Typography sx={{ fontSize: "1.35rem", fontWeight: 900 }}>
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
