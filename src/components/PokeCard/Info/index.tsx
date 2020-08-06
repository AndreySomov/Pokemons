import React, { FC } from 'react';
import { Pokemon } from '@types';

import { Typography } from 'antd';
import { TextWrapper, Container } from './styles';

const { Title, Text } = Typography;

const Info: FC<{ info: Pokemon }> = ({ info }) => (
  <Container>
    <img
      src={info.sprites.front_shiny || undefined}
      alt="Pokemon_image"
      width="180"
      height="180"
    />
    <TextWrapper>
      <Title level={4}>{info.name.toUpperCase()}</Title>
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
