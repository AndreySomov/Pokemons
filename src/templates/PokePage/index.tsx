import React from 'react';
import { useRouter } from 'next/router';

import { usePoke } from 'utils/hooks';

const PokePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  if (!name) return <div></div>
  console.log('name', name);
  const [pokeData, isLoading] = usePoke(name);

  console.log(pokeData);
  return (
    <div>{name}</div>
  );
};

export default PokePage;
