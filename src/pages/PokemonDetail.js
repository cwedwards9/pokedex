import React from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
    const { id } = useParams();
    console.log(id)
    return (
        <h1>This is a pokemon</h1>
    )
} 