export function PokeCard({ poke }) {
  return (
    <div className="PokeCard">
      <h2>{poke.pokemon}</h2>
      <img src={poke.url_image} />
      <p>Shape: {poke.shape}</p>
      <p>Type: {poke.type}</p>
      <p>Attack: {poke.attack}</p>
      <p>Defense: {poke.defense}</p>
    </div>
  );
}
