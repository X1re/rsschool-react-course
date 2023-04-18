import { flickrApi } from './../services/flickr.service';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    [flickrApi.reducerPath]: flickrApi.reducer,
    search: searchReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flickrApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
