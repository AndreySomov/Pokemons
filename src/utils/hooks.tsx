import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Pokemon, EvolutionChain } from '@types';
import { fetchInfo, fetchEvolution } from 'api';
import { getCommonPokes, normalizeEvo } from 'utils/utils';
import { setInfoToCache } from 'store/actions';
import { API_URL } from '../constants/env';

export const useCurrentPokes = (): Array<string> => {
  const activeCats = useSelector((state) => state.activeCategories);
  const pokes = useSelector((state) => state.data);
  const searchQuery = useSelector((state) => state.searchQuery);
  const formattedPokes = activeCats.length ? getCommonPokes(pokes, activeCats) : pokes.all;

  return searchQuery ? formattedPokes.filter((poke) => poke.match(searchQuery))
    : formattedPokes || [];
};

export const usePoke = (pokeName: string| string[]): Pokemon | undefined => {
  const url = `${API_URL}pokemon/${pokeName}`;
  const dispatch = useDispatch();
  const cache = useSelector((state) => state.cache);

  useEffect(() => {
    if (pokeName && !cache[url]) {
      fetchInfo(url).then((pokeInfo) => dispatch(setInfoToCache({ data: pokeInfo, url })));
    }
  }, [pokeName]);

  return cache[url];
};

export const usePokeEvo = (url: string): Array<EvolutionChain> | undefined => {
  const dispatch = useDispatch();
  const cache = useSelector((state) => state.cache);

  useEffect(() => {
    (async () => {
      if (url && !cache[url]) {
        const data = await fetchEvolution(url);
        dispatch(setInfoToCache({ data, url }));
      }
    })();
  }, [url]);

  return normalizeEvo(cache[url]);
};
