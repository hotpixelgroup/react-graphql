import {useQuery} from "@apollo/react-hooks";
import {GET_POKEMONS} from "../graphql/get-pokemons";

export function usePokemons() {
    const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
        variables: {first: 9}
    });

    return [pokemons]
}
