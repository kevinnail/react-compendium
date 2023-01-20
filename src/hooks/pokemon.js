import { useEffect, useState } from 'react';
import { fetchPokemon, fetchTypes } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log('pokemon from hooks', pokemon);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchPokemon('all');
      setPokemon(data);
      setLoading(false);
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

  const handleTypeChange = async (selectedType) => {
    setLoading(true);
    const data = await fetchPokemon(selectedType);

    setPokemon(data);
    setLoading(false);
  };

  return { pokemon, types, handleTypeChange, loading };
}
