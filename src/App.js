import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import ClearPokemon from "./components/ClearPokemons";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";
import FetchingData from "./components/FetchingData";

function App() {
  // const all_pokemon = [
  //   {
  //     name: "Charizard",
  //     weight: 90,
  //     awesome: true,
  //     terrifying: false,
  //     abilities: ["Blaze", "Solar Power", "Tough claws", "Drought"],
  //   },
  //   {
  //     name: "Bulbasaur",
  //     weight: 6.9,
  //     awesome: true,
  //     terrifying: false,
  //     abilities: ["Overgrow", "Chlorophyll"],
  //   },
  //   {
  //     name: "Mewtwo",
  //     weight: 122,
  //     awesome: true,
  //     terrifying: true,
  //     abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  //   },
  //   {
  //     name: "Mega beedrill",
  //     weight: 65,
  //     awesome: false,
  //     terrifying: true,
  //     abilities: ["Intimidate", "Unnerve"],
  //   },
  // ];

  return (
    <main /*className="container my-5"*/>
      {
        <Title content="Fetch some data" />
        /* <LikeCounter />
      <div className="row mb-4">
        {all_pokemon.map((pokemon, index) => (
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
      </div> */
      }
      <FetchingData />
    </main>
  );
}

export default App;
