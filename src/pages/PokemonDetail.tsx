import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { PokemonStats } from "../components/PokemonStats";
import getTypeBgColor from "../utils/getTypeBgColor";
import styles from "./PokemonDetail.module.scss";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

interface PokemonData {
    id: number;
    name: string
    moves: [{move: {name: string}}]
    abilities: [{ability: {name: string}}]
    types: [{slot: number, type: {name: string}}]
    stats: [{stat: {name: string}}]
}

export const PokemonDetail: React.FC = () => {
    const { id }: any = useParams();
    const [pokemon, setPokemon] = useState<PokemonData>();

    useEffect(() => {
        axios.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                console.log(response.data);
                let { id, name, moves, abilities, types, stats} = response.data;
                setPokemon({ id: id, name: name, moves: moves, abilities: abilities, types: types, stats: stats });
            })
    }, [id]);

    function addZero(id: number) {
        return id.toString().padStart(3, "0");
    }

    function capitalizeString(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let num = addZero(id)
    let imgSrc = `${POKE_API}${num}.png`;

    return(
        <section className={styles.pokemonDetails}>
            {pokemon ?
            <>
            <Navbar id={pokemon.id} />

            <h1 className={styles.pokemonName}>{pokemon.name && capitalizeString(pokemon.name)} 
                <span> #{pokemon.id && addZero(pokemon.id)}</span>
            </h1>
            <div className={styles.pokemonGrid}>
                <img className={styles.pokeImage} src={imgSrc} alt={pokemon.name} />
                <div className={styles.pokeInfo}>
                    <div className={styles.pokeInfoCard}>
                        <div className={styles.pokeMoves}>
                            <h3>Moves</h3>
                            <div className={styles.movesList}>
                                {pokemon.moves && pokemon.moves.slice(0, 5).map(move => (
                                    <p key={move.move.name} className={styles.move}>{move.move.name}</p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.pokeAbilities}>
                            <h3>Abilities</h3>
                            <div>
                                {pokemon.abilities && pokemon.abilities.map(ab => (
                                    <p key={ab.ability.name}>{ab.ability.name}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.pokeTypes}>
                        <h3>Type</h3>
                        <div className={styles.typesList}>
                            {pokemon.types && pokemon.types.map(type => (
                                <p key={type.slot} className={styles.type} style={{backgroundColor: getTypeBgColor(type.type.name)}}>{type.type.name}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.pokeStats}>
                    <h3>Stats</h3>
                    <div className={styles.statsList}>
                        {pokemon.stats && pokemon.stats.map(stat => (
                            <PokemonStats key={stat.stat.name} stat={stat} />
                        ))}
                    </div>
                </div> 
            </div>
            </>
            : null
            }
        </section>
    )
} 