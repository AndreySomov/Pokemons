import React, { FC, useState } from 'react';
import { Skeleton, Card, Modal } from 'antd';

import { useGetPoke } from 'utils/hooks';

import Stats from './Stats';
import Info from './Info';
import TypeList from './TypeList';

import { Container } from './styles';

const PokeCard: FC<{ pokeName: string }> = ({ pokeName }) => {
  const [pokeData, isLoading] = useGetPoke(pokeName);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Container onClick={() => setModalOpen(true)}>
      <Modal
        title="Evolution"
        visible={isModalOpen}
        onOk={console.log}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >

      </Modal>
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
