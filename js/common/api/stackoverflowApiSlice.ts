import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RawUserInfo, UserInfo } from './../../components/user/UserCard';

export const stackoverflowApi = createApi({
  reducerPath: 'stackOverflowApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.stackexchange.com/2.3/',
  }),
  tagTypes: ['User', 'Questions'],
  endpoints: ({ query }) => ({
    getUserById: query<any, string>({
      query: (userId: string) => ({ url: `users/${userId}`, params: { site: 'stackoverflow' } }),
      transformResponse: ({ items: [userInfo] }: { items: [RawUserInfo] }): UserInfo | null => {
        const { display_name: name, reputation, profile_image: avatar, user_id: userId } = userInfo;

        if (userInfo) {
          return {
            userId,
            name,
            reputation,
            avatar,
          };
        }
        return null;
      },
      providesTags: (result: UserInfo, error, arg) =>
        result ? [{ type: 'User' as const, userId: result.userId }, 'User'] : ['User'],
    }),
  }),
});

export const { useGetUserByIdQuery } = stackoverflowApi;
