import { NextApiResponse } from 'next';
import { api } from './config';

export async function getPokemon(pokemon: string) {
  api
    .get(`pokemon/${pokemon}`)
    .then((res: NextApiResponse) => console.log(res));
}

export async function getPokemonGeneration(value: string) {
  api
    .get(`generation/${value}`)
    .then((res: NextApiResponse) => console.log(res));
}
