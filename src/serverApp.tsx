import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Location } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { flickrApi } from './services/flickr.service';
import { initStore } from './store/createStore';

const store = initStore();

export async function render(url: string | Partial<Location>, opts: RenderToPipeableStreamOptions) {
  await store.dispatch(flickrApi.endpoints.getPhotos.initiate(''));
  const preloadedState = store.getState();
  const injectPreload = () => {
    return `
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
    `;
  };
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return { stream, injectPreload };
}
