import * as R from 'ramda';

export const getCommonPokes = (pokes, activeCategory) => {
  console.log(pokes);
  const sortedPokes = pokes.filter((poke) => activeCategory.includes(poke.name));
  const res = sortedPokes.reduce((acc, item) => R.intersectionWith(R.eqBy(R.prop('id')), acc, item), sortedPokes.reduce((acc, item) => acc.push(item.pokemon)), []);
  console.log(res);
}