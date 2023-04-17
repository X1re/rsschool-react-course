import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type ApiResponse = {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Photo[];
  };
  extra: {
    explore_data: string;
    next_perlude_interval: number;
  };
  stat: string;
};

export type Photo = {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  onShowModal?: () => void;
  onCardClick: (id: string) => void;
  type?: string;
};

const interestingEndpoint = `?method=flickr.interestingness.getList&api_key=${
  import.meta.env.VITE_FLICKR_KEY
}&per_page=12&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`;

const photoSearchEndpoint = `?method=flickr.photos.search&api_key=${
  import.meta.env.VITE_FLICKR_KEY
}&per_page=12&format=json&nojsoncallback=1&text=`;

export const flickrApi = createApi({
  reducerPath: 'flickrApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/services/rest' }),
  endpoints: (builder) => ({
    getPhotos: builder.query<ApiResponse, string>({
      query: (searchQuery) => {
        if (searchQuery) {
          return `${photoSearchEndpoint}${searchQuery}`;
        } else {
          return `${interestingEndpoint}`;
        }
      },
    }),
  }),
});

export const { useGetPhotosQuery } = flickrApi;
