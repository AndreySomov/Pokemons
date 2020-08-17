import React from 'react';
import { useRouter } from 'next/router';

import { usePoke } from 'utils/hooks';
import BackButton from 'components/BackButton';
import Loading from 'components/Loading';
import Evolution from './Evolution';
import Info from './Info';
import { Container } from './styles';

const PokePage: React.FC = () => {
  const router = useRouter();
  const poke = usePoke(router.query.name);
  if (!poke) return <Loading />;

  return (
    <Container>
      <BackButton />
      <Evolution />
      <Info info={poke} />
    </Container>
  );
};

export default PokePage;
