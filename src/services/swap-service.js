const _apiBase = 'https://pokeapi.co/api/v2/';

const swapData = async (id) => {
  const res = await fetch(`${_apiBase}${id}`);
  if (!res.ok) {
    throw new Error('Что-то пошло не так');
  }
  const o = await res.json();
  console.log('o', o);

  return await o;
};

export default swapData;
