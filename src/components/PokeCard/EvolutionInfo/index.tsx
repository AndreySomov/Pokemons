import React, { FC } from 'react';
import { usePokeEvo } from 'utils/hooks';
import { normalizeEvo } from 'utils/utils';
import Loading from 'components/Loading';
import EvoCard from './EvoCard';

import { Container } from './styles';

const EvolutionInfo: FC<{ evoUrl: string }> = ({ evoUrl }) => {
  const [evo, isLoading] = usePokeEvo(evoUrl);
  if (isLoading) return <Loading />;

  return (
    <Container>
      {evo && normalizeEvo(evo.chain).map((data) => <EvoCard evoInfo={data} />)}
    </Container>
  );
};

export default EvolutionInfo;
