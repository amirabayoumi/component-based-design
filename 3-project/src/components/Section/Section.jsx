import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Section.styles.css'
import { useErrorsContext } from '../../contexts';
import { ErrorCode, ErrorMessages } from '../../constants';

export const Section = () => {
  const { pokemonId } = useParams(); 
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {setError}= useErrorsContext();

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!res.ok) {throw new Error(ErrorMessages[ErrorCode.FETCH_ERROR])};
        const fetchData = await res.json();
        setData(fetchData);
      
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally{
        setIsLoading(false);
      }
    };

    getPokemon();
  }, [pokemonId, setError]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p className='errM'>{ErrorMessages[ErrorCode.POKEMON_NOT_FOUND]}</p>;

  return (
    <div className="pokemon-card">
      <h1>{data.name}</h1>
      <img className='pokImg' src={data.sprites.front_default} alt={data.name} />
      <p className='pokType'>Type: {data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      <p className='pokHeight'>Height: {data.height } m</p>
      <p className='pokWeight'>Weight: {data.weight } kg</p>
      <p className='pokAbilities'>Abilities: {data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
    </div>
  );
};