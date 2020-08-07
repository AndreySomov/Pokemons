import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../constants/env';
import { getPoke } from 'api';
import { getCommonPokes } from 'utils/utils';
import { setPokeToCache } from 'store/actions';

export const useCurrentPokes = () => {
  const activeCats = useSelector((state) => state.activeCategories);
  const pokes = useSelector((state) => state.data);
  const formattedPokes = activeCats.length ? getCommonPokes(pokes, activeCats) : pokes.all;
  return formattedPokes || [];
};

export const useGetPoke = (pokeName) => {
  const url = `${API_URL}pokemon/${pokeName}`;
  const dispatch = useDispatch();
  const cache = useSelector((state) => state.pokesCache);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!cache[url]) {
      setLoading(true);
      getPoke(url).then((data) => {
        dispatch(setPokeToCache({ data, name: url }));
        setLoading(false);
      });
    }
  }, []);

  return [cache[url], isLoading];
};
