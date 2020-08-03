import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PokemonCard from 'components/PokemonCard';
import actions from 'store/actions';
import { getPokes } from '../../api';

import { Container } from './styles';

const Home: React.FC = () => {
  const pokes = useSelector((state) => state.pokes.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPokes());
    getPokes('https://pokeapi.co/api/v2/pokemon')
      .then((data) => dispatch(actions.fetchPokesSuccess(data)));
  }, []);

  console.log(pokes);

  return (
    <Container>
      {pokes.map((poke) => <PokemonCard info={poke} />)}
    </Container>
  );
};

export default Home;
