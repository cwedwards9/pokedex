import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Pokemon.module.scss";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

export default function Pokemon({ id, name }) {
    function addZero(id) {
        return id.toString().padStart(3, "0");
    }

    let num = addZero(id)
    let imgSrc = `${POKE_API}${num}.png`

    return (
        <section className={styles.Pokemon}>
            <h1 className={styles.pokename}><NavLink to={`/pokemon/${id}`}>{name}</NavLink></h1>
            <img className={styles.pokeimage} src={imgSrc} alt={name} />
        </section>
    );
}