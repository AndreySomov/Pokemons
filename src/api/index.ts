import { API_URL } from 'constants/env';

export const getPoke = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getCategories = async () => {
  const res = await fetch(`${API_URL}type`);
  const data = await res.json();
  const result = await Promise.all(
    data.results.map((item) => fetch(item.url).then((response) => response.json())),
  );

  return result;
};
