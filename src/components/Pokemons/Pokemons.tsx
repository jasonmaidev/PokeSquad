import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import FlexBetween from "../FlexBetweenBox";
import { typeColor } from "@/theme/typeColors";

const Pokemons = () => {
  const [squad, setSquad] = useState([]);

  function getRandomIds() {
    const result: number[] = [];
    const min = 1;
    const max = 386;

    while (result.length < 6) {
      const randomInt: number =
        Math.floor(Math.random() * (max - min + 1)) + min;

      if (!result.includes(randomInt)) {
        result.push(randomInt);
      }
    }
    return result;
  }

  const getPokemon = async () => {
    const randomIds = getRandomIds();
    const urls = randomIds.map(
      (id) => `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    console.log(urls);
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
      <Button
        disabled={squad.length >= 6}
        onClick={getPokemon}
        variant="contained"
        sx={{
          backgroundColor: "#0fd99c",
          boxShadow: "none",
          borderRadius: "3rem",
        }}
      >
        Get Pokemon
      </Button>
      <Button onClick={() => console.log(squad)}>Get Pokemon Squad</Button>
      <Box
        gap={4}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"flex-end"}
      >
        {squad?.map((pokemon: any) => {
          return (
            <>
              {/* Pokemon Modal */}
              <Box
                flexBasis={"10%"}
                display={"flex"}
                flexDirection={"column"}
                alignContent={"center"}
              >
                <img src={pokemon?.sprites.front_default} />

                <Box>
                  <Typography
                    sx={{ fontWeight: 600, pb: 1, textAlign: "center" }}
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
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
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
