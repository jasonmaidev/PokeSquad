import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import scss from "../components/Layout/Layout.module.scss";
import React from "react";
import Pokemons from "@/components/Pokemons";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>{session ? <Pokemons /> : <Login />}</main>
  );
};

export default Home;
