import React from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'antd';

import { getCommonPokes } from 'utils';
import PokeCard from 'components/PokeCard';

import { Container } from './styles';

const PokeList: React.FC = () => {
  const activeCategories = useSelector((state) => state.categories.activeCategories);
  const pokes1 = useSelector((state) => state.categories.data);
  const pokes = useSelector((state) => state.pokes.pokesData);
  let formattedPokes;

  if (activeCategories.length) {
    formattedPokes = getCommonPokes(pokes1, activeCategories);
    console.log(formattedPokes);
  }

  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  return (
    <>
      <Pagination
        style={{ position: 'fixed', zIndex: 1, right: 0 }}
        defaultCurrent={1}
        total={pokes.length}
        onChange={onChange}
        showSizeChanger={false}
      />
      <Container>
        {pokes.map((poke) => <PokeCard info={poke} />)}
      </Container>
    </>
  );
};

export default PokeList;
