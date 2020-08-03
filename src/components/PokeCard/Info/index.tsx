import React, { FC } from 'react';
import { Sprites } from '@types';

import { Typography, Space } from 'antd';
import { TextWrapper, Container } from './styles';

const { Title, Text } = Typography;



interface Info {
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
  id: number;
}

const Info: FC<{ info: Info }> = ({ info }) => (
  <Container>
    <img
      src={info.sprites.front_shiny || undefined}
      alt="Pokemon_image"
      width="150"
      height="150"
    />
    <TextWrapper>
      <Title level={2}>{info.name}</Title>
      <Text>
        Id:
        {info.id}
      </Text>
      <Text>
        Height:
        {info.height}
      </Text>
      <Text>
        Weight:
        {info.height}
      </Text>
    </TextWrapper>
  </Container>
);

export default Info;
