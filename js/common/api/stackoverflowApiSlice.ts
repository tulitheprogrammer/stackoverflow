import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stackOverflowApi = createApi({
  reducerPath: 'stackOverflowApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: ({ query }) => ({
    getUserById1: query<any, string>({
      query: (name: string = 'bulbasaur') => `pokemon/${name}`,
    }),
    getUserById: query<any, string>({
      // query: (name: string = 'bulbasaur') => `pokemon/${name}`,
      query: (arg) => {
        console.log('arg: ', arg);
        return {
          url: `pokemon/bulbasaur`,
          // params: { start, end },
        };
      },
    }),
  }),
});

export const { useGetUserByIdQuery } = stackOverflowApi;