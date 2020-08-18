import React from 'react';
import { useRouter } from 'next/router';

import { usePoke, usePokeEvo } from 'utils/hooks';
import BackButton from 'components/BackButton';
import Loading from 'components/Loading';
import Evolution from './Evolution';
import Info from './Info';
import { Container, Wrapper } from './styles';

const PokePage: React.FC = () => {
  const router = useRouter();
  const poke = usePoke(router.query.name);
  const evo = usePokeEvo(poke && poke.species.url);
  if (!poke) return <Loading />;
  return (
    <Container>
      <Wrapper>
        <BackButton />
        <Info info={poke} />
      </Wrapper>
      <Evolution evo={evo} />
    </Container>
  );
};

export default PokePage;
