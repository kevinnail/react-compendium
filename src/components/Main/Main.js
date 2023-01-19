import React from 'react';
import Controls from '../Controls/Controls';
import { usePokemon } from '../../hooks/pokemon';

export default function Main() {
  const { pokemon } = usePokemon();
  console.log('pokemon', pokemon);

  return (
    <main>
      <Controls />
    </main>
  );
}
