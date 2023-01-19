import React from 'react';
import Controls from '../Controls/Controls';
import { PokeCard } from '../PokeCard/PokeCard';
import { usePokemon } from '../../hooks/pokemon';

export default function Main() {
  const { pokemon } = usePokemon();
  console.log('pokemon from Main', pokemon);

  return (
    <main>
      <Controls />
      {pokemon.map((poke) => (
        <PokeCard key={poke._id} {...{ poke }} />
      ))}
    </main>
  );
}
