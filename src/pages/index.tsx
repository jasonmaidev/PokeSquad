import scss from "../components/Layout/Layout.module.scss";
import React from "react";
import Pokemons from "@/components/Pokemons";

const Home: React.FC = () => {

  return (
    <main className={scss.main}>{<Pokemons />}</main>
  );
};

export default Home;
