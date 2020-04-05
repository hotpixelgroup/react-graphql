import React from 'react';
import {Pokemon} from '../components/Pokemon';
import {usePokemons} from "../hooks/custom-hooks";

export function PokemonsContainer() {
    const [pokemons] = usePokemons();

    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    );
}
