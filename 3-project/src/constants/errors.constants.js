export const ErrorCode = {
  POKEMON_NOT_FOUND: 'pokemon-not-found',
  FETCH_ERROR: 'fetch-error'
};

export const ErrorMessages = {
  [ErrorCode.POKEMON_NOT_FOUND]: 'Pokémon not found. Please check the ID and try again.',
  [ErrorCode.FETCH_ERROR]: 'Something went wrong. Please try again later.',
  DEFAULT: 'An unexpected error occurred. Please try again.',
};