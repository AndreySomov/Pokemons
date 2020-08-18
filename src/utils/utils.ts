import * as R from 'ramda';

import { EvolutionChain } from '@types';

export const getCommonPokes = (categories, activeCategory) => {
  const filteredCategories = [];
  for (const key in categories) {
    if (activeCategory.includes(key)) {
      filteredCategories.push(categories[key]);
    }
  }

  let result = [];

  if (filteredCategories.length < 2) return filteredCategories[0];

  for (let i = 1; i < filteredCategories.length; i += 1) {
    if (!result.length) {
      result = R.intersection(filteredCategories[0], filteredCategories[i]);
    } else {
      result = R.intersection(result, filteredCategories[i]);
    }
  }
  return result;
};

export const normalizeCategory = (categories) => {
  const som = categories.reduce((acc, key) => Object
    .assign(acc, { [key.name]: key.pokemon.map((poke) => poke.pokemon.name) }), {});
  const all = new Set(Object.keys(som).reduce((acc, key) => acc.concat(som[key]), []));

  som.all = Array.from(all);
  return som;
};

export const normalizeEvo = (data): Array<EvolutionChain> => {
  if (!data) return [];
  const result = [];

  const func = (obj) => {
    if (obj.evolves_to.length) {
      obj.evolves_to.forEach((d) => func(d));
    }
    result.push(obj);
  };

  func(data.chain);
  return result;
};
