import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
import routes from '../common/routes';

// hydrate(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

const store = configureStore(window.__PRELOADED_STATE__ || {});

ensureReady(routes).then(data =>
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <After data={data} routes={routes} />
        </BrowserRouter>
      </Provider>,
        document.getElementById('root')
    )
);
if (module.hot) {
  module.hot.accept();
}
