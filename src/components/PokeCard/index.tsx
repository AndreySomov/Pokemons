import React, {FC} from 'react';

import { Pokemon } from '../../react-app-env';

import Stats from './Stats';
import Info from './Info';

import './styles.css';




const PokemonCard: FC<{ info: Pokemon }> = ({ info }) => {
  const pokemonInfo = {
    weight: info.weight,
    height: info.weight,
    sprites: info.sprites,
    name: info.name,
    id: info.id,
  };

  return (
    <div className="poke-card">
      <Info info={pokemonInfo}/>
      <Stats stats={info.stats}/>
    </div>
  )
};

export default PokemonCard;