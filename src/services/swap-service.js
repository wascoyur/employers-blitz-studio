
export default class SwapData{
  _apiBase = 'https://pokeapi.co/api/v2/pokemon/';
  
  async getResource(url){
    const res = await fetch(`${this._apiBase}`)
    if (!res.ok) {
      throw new Error('Could not fetch')
    }
    return await res.json()
  }
}
const swapData = new SwapData();
const result = swapData.getResource();
console.log(result);

