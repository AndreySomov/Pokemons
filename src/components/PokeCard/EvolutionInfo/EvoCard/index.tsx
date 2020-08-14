import React, { FC } from 'react';

import { EvolutionChain } from '@types';

const EvoCard: FC<{ evoInfo: EvolutionChain }> = ({ evoInfo }) => {
  console.log('som', evoInfo);

  return (
    <div>{evoInfo.species.name}</div>
  );
};

export default EvoCard;
