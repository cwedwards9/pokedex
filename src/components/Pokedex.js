import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import styles from "./Pokedex.module.scss";

export default function Pokedex() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(res => {
                console.log(res.data.results)
                setPokemonList(res.data.results);
            });
    }, [])

    return (
        <div className={styles.Pokedex}>
            {pokemonList.map((pokemon, idx) => (
            <Pokemon
                key={uuidv4()}
                id={idx + 1}
                name={pokemon.name}
                url={pokemon.url}
            />
            ))}
        </div>
    )
}