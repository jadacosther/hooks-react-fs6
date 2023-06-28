import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export function PokemonInfo({name}) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(
    () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(pokemon => {
          console.log(pokemon);
          setPokemonInfo(pokemon);
        });
    },[name]);

  return (
    pokemonInfo && (
      <span>
        La pokeId es #{pokemonInfo.id} y su nombre es {pokemonInfo.name}
      </span>
    )
  );
}

PokemonInfo.propTypes = {
    name: PropTypes.string.isRequired
}

