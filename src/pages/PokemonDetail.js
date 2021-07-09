import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./PokemonDetail.module.scss";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

export default function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                console.log(response.data);
                setPokemon(response.data);
            })
    }, [id]);

    function addZero(id) {
        return id.toString().padStart(3, "0");
    }

    function capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let num = addZero(id)
    let imgSrc = `${POKE_API}${num}.png`;

    return(
        <section className={styles.pokemonDetails}>
            <h1>{pokemon.name && capitalizeString(pokemon.name)} 
                <span> #{pokemon.id && addZero(pokemon.id)}</span>
            </h1>
            <div className={styles.pokemonGrid}>
                <img className={styles.pokeImage} src={imgSrc} alt={pokemon.name} />
                <div className={styles.pokeAbilities}>
                    <h3>Abilities</h3>
                    <p>{pokemon.abilities && pokemon.abilities[0].ability.name}</p>
                </div>
                <div className={styles.pokeStats}>
                    <h3>Stats</h3>
                    <div className={styles.statsList}>
                        {pokemon.stats && pokemon.stats.map(stat => (
                            <div key={stat.stat.name}>
                                <p>{stat.stat.name}</p>
                                <p>{stat.base_stat}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.pokeTypes}>
                    <h3>Types</h3>
                    <div className={styles.typesList}>
                        {pokemon.stats && pokemon.types.map(type => (
                            <p key={type.slot}>{type.type.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 