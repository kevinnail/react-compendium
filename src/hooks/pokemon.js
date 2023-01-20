import { useEffect, useState } from 'react';
import { fetchPokemon, fetchTypes } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
      setTypes(filteredData);
    };
    fetchData();
  }, []);

  const handleQuery = async (selectedType) => {
    setLoading(true);
    const data = await fetchPokemon(selectedType);

    setPokemon(data);
    setLoading(false);
  };

  return { pokemon, types, handleQuery, loading };
}
