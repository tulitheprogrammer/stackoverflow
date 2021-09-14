import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RawUserInfo, UserInfo, QuestionsList } from '@components/User';

export const userApi = createApi({
  reducerPath: 'stackOverflowApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.stackexchange.com/2.3/users/',
  }),
  tagTypes: ['User', 'Questions'],
  endpoints: ({ query }) => ({
    getUserById: query<UserInfo | null, string>({
      query: (userId: string) => ({ url: `${userId}`, params: { site: 'stackoverflow' } }),
      transformResponse: ({ items: [userInfo] }: { items: [RawUserInfo] }): UserInfo | null => {
        if (userInfo) {
          const {
            display_name: name,
            reputation,
            profile_image: avatar,
            user_id: userId,
            accept_rate: acceptRate,
          } = userInfo;

          return {
            userId,
            name,
            reputation,
            avatar,
            acceptRate,
          };
        }
        return null;
      },
    }),
    getQuestionsByUserId: query<QuestionsList | null, string>({
      query: (userId: string) => ({
        url: `${userId}/questions`,
        params: { order: 'desc', sort: 'activity', site: 'stackoverflow' },
      }),
      transformResponse: ({ items: questions }: { items: QuestionsList }): QuestionsList | null => questions,
    }),
  }),
});

export const { useGetUserByIdQuery , useGetQuestionsByUserIdQuery} = userApi;
