/*
 *
 * PokemonDetails constants
 *
 */

const PREFIX = 'app/PokemonDetails/';

const ATTEMPT = '_ATTEMPT';
const FAILURE = '_FAILURE';
const REQUEST = '_REQUEST';
const SUCCESS = '_SUCCESS';

const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
export const GET_POKEMON_DETAILS_ATTEMPT = `${PREFIX}${GET_POKEMON_DETAILS}${ATTEMPT}`;
export const GET_POKEMON_DETAILS_FAILURE = `${PREFIX}${GET_POKEMON_DETAILS}${FAILURE}`;
export const GET_POKEMON_DETAILS_REQUEST = `${PREFIX}${GET_POKEMON_DETAILS}${REQUEST}`;
export const GET_POKEMON_DETAILS_SUCCESS = `${PREFIX}${GET_POKEMON_DETAILS}${SUCCESS}`;
