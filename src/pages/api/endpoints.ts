// Tipagem do next referente a response
import { NextApiResponse } from 'next';
import { api } from './config';

// Função de GET para a rota da BaseURL de Pokemon
export async function getPokemon(pokemon: string, setValue: any) {
  api.get(`pokemon/${pokemon}`).then((res: any) => setValue(res?.data));
}

// Endpoint de retorno de intervalo de pokemons
export function getPokemonInterval(
  offset: number,
  limit: number,
  setValue: any,
) {
  api
    .get(`pokemon/`, {
      params: {
        offset,
        limit,
      },
    })
    .then((res: any) => setValue(res?.data?.results));
}

// Função de GET para a rota da BaseURL de Pokemon Generation
export async function getPokemonGeneration(value: string) {
  api
    .get(`generation/${value}`)
    .then((res: NextApiResponse) => console.log(res));
}
