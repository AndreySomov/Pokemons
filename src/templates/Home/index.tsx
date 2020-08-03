import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from 'components/Layout';
import actions from 'store/actions';
import PokeList from './PokeList';
import { getPokes } from '../../api';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPokes());

    getPokes('https://pokeapi.co/api/v2/pokemon')
      .then((data) => dispatch(actions.fetchPokesSuccess(data)));
  }, []);

  return (
    <PokeList />
  );
};

export default Home;
