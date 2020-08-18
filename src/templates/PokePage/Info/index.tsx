import React from 'react';
import { Typography } from 'antd';

import { Pokemon } from '@types';
import { Container } from './styles';

const { Text } = Typography;

const Info: React.FC<{ info: Pokemon }> = ({ info }) => (
  <Container>
    <Text style={{ color: 'white' }}>
      Name:
      {' '}
      {info.name}
    </Text>
    <Text style={{ color: 'white' }}>
      Id:
      {' '}
      {info.id}
    </Text>
    <Text style={{ color: 'white' }}>
      Weight:
      {' '}
      {info.weight}
    </Text>
    <Text style={{ color: 'white' }}>
      Height:
      {' '}
      {info.height}
    </Text>
    <Text style={{ color: 'white' }}>
      Base experience:
      {' '}
      {info.base_experience}
    </Text>
    <Text style={{ color: 'white' }}>
      Species name:
      {' '}
      {info.species.name}
    </Text>
  </Container>
);

export default Info;
