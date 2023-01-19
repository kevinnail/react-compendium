import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  console.log('pokemon from hooks', pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  return { pokemon };
}
