import React from 'react';
import { useRouter } from 'next/router';

import BackButton from 'components/BackButton';
import Loading from 'components/Loading';
import { usePokeEvo, usePoke } from 'utils/hooks';
import { Container } from './styles';

const PokePage: React.FC = () => {
  const router = useRouter();
  const poke = usePoke(router.query.name);
  const evo = usePokeEvo(poke && poke.species.url);

  if (!evo) return <Loading />;
  console.log(evo);

  return (
    <Container>
      <BackButton />
    </Container>
  );
};

export default PokePage;
