import React from 'react';
import { useSelector } from 'react-redux';

import PokeCard from 'components/PokeCard';

import { Container } from './styles';

const PokeList: React.FC = () => {
  const pokes = useSelector((state) => state.pokes.data);

  return (
    <Container>
      {pokes.map((poke) => <PokeCard info={poke} />)}
    </Container>
  );
};

export default PokeList;
