import React, { useState } from 'react';
import axios from 'axios';

function Filter() {
  const [tipo, setTipo] = useState('');
  const [resultados, setResultados] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${tipo.toLowerCase()}`);
      const pokemon = response.data.pokemon.map(p => ({ nombre: p.pokemon.name, tipos: p.pokemon.types.map(t => t.type.name), imagen: `https://pokeapi.co/api/v2/type/${p.pokemon.url.split('/')[6]}.png` }));
      setResultados(pokemon);
    } catch (error) {
      console.error(error);
      setResultados([]);
    }
  }
  return (
    <div className="FilterPokemon">
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de Pokémon:
          <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
        </label>
        <button type="submit">Buscar</button>
      </form>
      <div className="resultados">
        {resultados.map((pokemon, index) => (
          <div key={index} className="pokemon">
            <img src={pokemon.imagen} alt={pokemon.nombre} />
            <p>{pokemon.nombre}</p>
            <p>{pokemon.tipos.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Filter;

