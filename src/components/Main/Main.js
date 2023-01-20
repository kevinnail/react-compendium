import React from 'react';
import Controls from '../Controls/Controls';
import { PokeCard } from '../PokeCard/PokeCard';
import { usePokemon } from '../../hooks/pokemon';

import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading } = usePokemon();
  // console.log('pokemon from Main', pokemon);

  return (
    <main>
      <Controls {...{ types, handleTypeChange }} />
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <div className="cards">
          {pokemon.map((poke) => (
            <PokeCard key={poke._id} {...{ poke }} />
          ))}
        </div>
      )}
    </main>
  );
}
