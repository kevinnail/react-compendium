export async function fetchPokemon(selectedType) {
  // console.log('selectedType in fetch', selectedType);
  let resp = null;
  if (selectedType === 'all') {
    resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  } else {
    console.log('selectedType in fetch', selectedType);

    resp = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type=${selectedType}`);
  }

  // console.log('resp', resp);

  const data = await resp.json();
  console.log('data from fetch', data);

  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  // console.log('types data', data);
  return data;
}
