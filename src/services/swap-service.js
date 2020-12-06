const _apiBase = 'https://pokeapi.co/api/v2/';

const getData = async (id = 'pokemon/') => {
  const res = await fetch(`${_apiBase}${id}`);
  console.log('getData fetch:', `${_apiBase}${id}`);

  if (!res.ok) {
    throw new Error('Что-то пошло не так:', res.statusText);
  }
  const out = await res.json();
  return await out;
};

const getFullUrl = async (urlOrId) => {
  const res = await fetch(`url`);
  console.log('getFullUrl:', `url`);

  if (!res.ok) {
    throw new Error('Что-то пошло не так');
  }
  const out = await res.json();
  console.log('getFullUrl:', out);

  return await out;
};
const testFunc = (id)=>{console.log('test', id);
}
const getPokeMain = async (nameOrId) => {
  //nameOrId = 'pokemon/2/';
  const pointer = `${nameOrId}`;
  //console.log('getPokeMain-pointer', pointer);

  const pokeMain = await getData(`pokemon/${pointer}`);
  console.log('getPokeMain-pokeMain', await pokeMain);
  return pokeMain;
};
export { getData, getPokeMain };
