import React from 'react';

import { EvolutionChain } from '@types';
import PokeCard from 'components/PokeCard';

import { Container } from './styles';

const Evolution: React.FC<{ evo: Array<EvolutionChain>}> = ({ evo }) => (
  <Container>
    {evo.reverse().map((step) => <PokeCard pokeName={step.species.name} />)}
  </Container>
);

export default Evolution;
