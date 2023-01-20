export async function fetchPokemon(selectedType) {
  let resp = null;
  if (selectedType === 'all') {
    resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  } else {
    resp = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type=${selectedType}`);
  }

  const data = await resp.json();

  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}
