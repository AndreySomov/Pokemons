import { API_URL } from 'constants/env';

export const fetchInfo = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const fetchCategories = async () => {
  const res = await fetch(`${API_URL}type`);
  const data = await res.json();
  const result = await Promise.all(
    data.results.map((item) => fetch(item.url).then((response) => response.json())),
  );

  return result;
};

export const fetchEvolution = async (speciesUrl) => {
  const species = await fetch(speciesUrl);
  const speciesData = await species.json();
  const evo = await fetch(speciesData.evolution_chain.url);
  const evoData = await evo.json();

  return evoData;
};
