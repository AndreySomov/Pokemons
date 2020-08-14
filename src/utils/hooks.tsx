import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchInfo } from 'api';
import { getCommonPokes } from 'utils/utils';
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

export const usePoke = (pokeName) => {
  const url = `${API_URL}pokemon/${pokeName}`;
  const dispatch = useDispatch();
  const cache = useSelector((state) => state.cache);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!cache[url]) {
        setLoading(true);
        const pokeInfo = await fetchInfo(url);
        dispatch(setInfoToCache({ data: pokeInfo, url }));
        setLoading(false);
      }
    })();
  }, []);

  return [cache[url], isLoading];
};

export const usePokeEvo = (speciesUrl) => {
  console.log(speciesUrl);
  const dispatch = useDispatch();
  const cache = useSelector((state) => state.cache);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!cache[speciesUrl]) {
        setLoading(true);
        const species = await fetchInfo(speciesUrl);
        const evolutionChain = await fetchInfo(species.evolution_chain.url);
        dispatch(setInfoToCache({ data: evolutionChain, url: speciesUrl }));
        setLoading(false);
      }
    })();
  }, []);

  return [cache[speciesUrl], isLoading];
};
