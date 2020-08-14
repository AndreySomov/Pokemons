import React, { FC } from 'react';
import { Pokemon } from '@types';

import { Typography } from 'antd';
import { TextWrapper, Container, ImgWrapper } from './styles';

const { Title, Text } = Typography;

const Info: FC<{ info: Pokemon }> = ({ info }) => (
  <Container>
    <ImgWrapper>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${info.id}.png`}
        alt="Pokemon_image"
        width="150"
        height="150"
      />
    </ImgWrapper>
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
