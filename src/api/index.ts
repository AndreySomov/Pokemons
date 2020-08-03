export const getPokes = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return await Promise.all(
    data.results.map(item =>
      fetch(item.url)
        .then(res => res.json())))

};