import React from 'react';
import Controls from '../Controls/Controls';
import { usePokemon } from '../../hooks/pokemon';

export default function Main() {
  const { pokemon } = usePokemon();
  console.log('pokemon from Main', pokemon);

  return (
    <main>
      <Controls />
      {pokemon.map((poke) => (
        <div key={poke._id}>{poke.pokemon}</div>
      ))}
    </main>
  );
}
