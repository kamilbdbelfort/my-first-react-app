// src/components/ClearPokemons.js
import { useState } from "react";
import Pokemon from "./Pokemon";

export default function ClearPokemon() {
  const initialValue = 1;
  const [count, setCount] = useState(initialValue);
  const all_pokemon = [
    {
      name: "Charizard",
      weight: 90,
      awesome: true,
      terrifying: false,
      abilities: ["Blaze", "Solar Power", "Tough claws", "Drought"],
    },
    {
      name: "Bulbasaur",
      weight: 6.9,
      awesome: true,
      terrifying: false,
      abilities: ["Overgrow", "Chlorophyll"],
    },
    {
      name: "Mewtwo",
      weight: 122,
      awesome: true,
      terrifying: true,
      abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    },
    {
      name: "Mega beedrill",
      weight: 65,
      awesome: false,
      terrifying: true,
      abilities: ["Intimidate", "Unnerve"],
    },
  ];
  const [display, setDisplay] = useState([]);

  function buttonShowPokemonCards(count) {
    if (count === 1) {
      setDisplay(all_pokemon);
    } else if (count > 1) {
      if (count % 2 !== 0) {
        setDisplay(all_pokemon);
      } else {
        setDisplay([]);
      }
    }
  }

  buttonShowPokemonCards(count);

  return (
    <div className="row mb-4">
      <button onClick={(buttonShowPokemonCards) => setCount(count + 1)}>
        Pokemon Button
      </button>
      {display.map((pokemon, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <Pokemon
            name={pokemon.name}
            weight={pokemon.weight}
            awesome={pokemon.awesome}
            terrifying={pokemon.terrifying}
            abilities={pokemon.abilities}
          />
        </div>
      ))}
    </div>
  );
}
