export const getPokes = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return await Promise.all(
    data.results.map(item =>
      fetch(item.url)
        .then(res => res.json())))

};

export const getBasePokesList = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
  const data = await res.json();
  return data;
};

export const getCategories = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/type');
  const data = await res.json();
  const result = await Promise.all(
    data.results.map((item) => fetch(item.url).then((response) => response.json())),
  );

  return result;
};
