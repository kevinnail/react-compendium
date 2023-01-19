export async function fetchPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  // console.log('resp', resp);

  const data = await resp.json();

  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  // console.log('types data', data);
  return data;
}
