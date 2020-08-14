import React, { FC } from 'react';
import Link from 'next/link';
import { Skeleton, Card } from 'antd';
import { usePoke } from 'utils/hooks';
import Stats from './Stats';
import Info from './Info';
import TypeList from './TypeList';
import { Container } from './styles';

const PokeCard: FC<{ pokeName: string }> = ({ pokeName }) => {
  const [pokeData, isLoading] = usePoke(pokeName);

  return (
    <Container>
      <Link href="/pokemon/[name]" as={`/pokemon/${pokeData && pokeData.name}`}>
        <Card
          style={{
            minWidth: '330px',
            maxWidth: '330px',
            minHeight: '453px',
            maxHeight: '453px',
            background: '#e6e6e6',
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
      </Link>
    </Container>
  );
};

export default PokeCard;
