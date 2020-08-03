import React, { FC } from 'react';

import { Progress, Typography } from 'antd';
import { Stat } from '@types';
import { Container } from './styles';

const { Title } = Typography;

const Stats: FC<{ stats: Array<Stat> }> = ({ stats }) => (
  <Container>
    <Title level={2}>Base Stats</Title>
    {stats.map((stat) => (
      <Progress
        percent={stat.base_stat}
        status="active"
        strokeColor={stat.base_stat > 33 ? (stat.base_stat > 66 ? 'green' : 'blue') : 'red'}
        format={(percent) => percent + ' ' + stat.stat.name}
      />
    ))}
  </Container>
);

export default Stats;
