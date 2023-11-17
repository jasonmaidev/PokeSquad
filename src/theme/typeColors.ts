export const typeColor = (pokemonType: string) => {
  switch (pokemonType) {
    case "normal":
      return "#7d7c7a";
      break;
    case "fire":
      return "#ff6200";
      break;
    case "water":
      return "#0062ff";
      break;
    case "grass":
      return "#54c200";
      break;
    case "electric":
      return "#d4a600";
      break;
    case "ice":
      return "#59889e";
      break;
    case "fighting":
      return "#522609";
      break;
    case "poison":
      return "#752885";
      break;
    case "ground":
      return "#543a09";
      break;
    case "flying":
      return "#4b74b3";
      break;
    case "psychic":
      return "#bd3180";
      break;
    case "bug":
      return "#667d00";
      break;
    case "rock":
      return "#4f4c46";
      break;
    case "ghost":
      return "#302952";
      break;
    case "dragon":
      return "#3a25b0";
      break;
    case "dark":
      return "#24222b";
      break;
    case "steel":
      return "#3d3e40";
      break;
    case "fairy":
      return "#b55387";
      break;
    default:
      pokemonType = "#333";
  }

  return pokemonType;
};
