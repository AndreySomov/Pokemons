import React, { FC } from 'react';

import { Pokemon } from '@types';

import Stats from './Stats';
import Info from './Info';

import { Container } from './styles';

const PokeCard: FC<{ info: Pokemon }> = ({ info }) => {
  const pokemonInfo = {
    weight: info.weight,
    height: info.weight,
    sprites: info.sprites,
    name: info.name,
    id: info.id,
  };

  return (
    <Container>
      <Info info={pokemonInfo} />
      <Stats stats={info.stats} />
    </Container>
  );
};

export default PokeCard;
