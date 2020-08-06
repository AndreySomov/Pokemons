import React, { FC } from 'react';
import { Skeleton, Card } from 'antd';

import { useGetPoke } from 'utils/hooks';

import Stats from './Stats';
import Info from './Info';
import TypeList from './TypeList';

import { Container } from './styles';

const PokeCard: FC<{ pokeUrl: string }> = ({ pokeUrl }) => {
  const [pokeData, isLoading] = useGetPoke(pokeUrl);

  return (
    <Container>
      <Card
        style={{
          minWidth: '320px',
          maxWidth: '320px',
          minHeight: '453px',
          maxHeight: '453px',
        }}
      >
        <Skeleton
          loading={isLoading}
          avatar
          active
          title
          paragraph={{ rows: 7 }}
        >
          {pokeData && (
            <>
              <Info info={pokeData} />
              <TypeList pokeTypes={pokeData.types} />
              <Stats stats={pokeData.stats} />
            </>
          )}
        </Skeleton>
      </Card>
    </Container>
  );
};

export default PokeCard;
