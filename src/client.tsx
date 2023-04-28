import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { initStore, RootState } from './store/createStore';

type CustomWindowInstanse = Window &
  typeof globalThis & {
    __PRELOADED_STATE__?: RootState;
  };
const store = initStore((window as CustomWindowInstanse).__PRELOADED_STATE__);
delete (window as CustomWindowInstanse).__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
