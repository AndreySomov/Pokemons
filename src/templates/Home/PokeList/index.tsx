import React, { useState } from 'react';
import { Pagination } from 'antd';

import { useCurrentPokes } from 'utils/hooks';
import PokeCard from 'components/PokeCard';

import { Container } from './styles';

const PokeList: React.FC = () => {
  const [page, setPage] = useState(0);
  const pokes = useCurrentPokes();

  return (
    <>
      <Pagination
        defaultCurrent={1}
        total={pokes.length}
        onChange={(chosenPage) => setPage(chosenPage - 1)}
        showSizeChanger={false}
        pageSize={8}
      />
      <Container>
        {pokes.slice(page * 8, page * 8 + 8).map((poke) => <PokeCard key={poke} pokeName={poke} />)}
      </Container>
    </>
  );
};

export default PokeList;
