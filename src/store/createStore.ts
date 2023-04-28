import { flickrApi } from './../services/flickr.service';
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formReducer from './formSlice';
import * as toolkitRaw from '@reduxjs/toolkit';
export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { combineReducers, configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

const rootReducer = combineReducers({
  [flickrApi.reducerPath]: flickrApi.reducer,
  search: searchReducer,
  form: formReducer,
});

export const initStore = (
  preloadedState?: toolkitRaw.PreloadedState<ReturnType<typeof rootReducer>>
) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flickrApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];
