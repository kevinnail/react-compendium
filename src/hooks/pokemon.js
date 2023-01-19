import { useEffect, useState } from 'react';
import { fetchPokemon, fetchTypes } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  // console.log('pokemon from hooks', pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      const filteredData = data.map((data) => data.type);
      // console.log('filtered', filteredData);
      setTypes(filteredData);
    };
    fetchData();
  }, []);

  return { pokemon, types };
}
