import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './common/routes';
import configureStore from './common/store/configureStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const preloadedState = { counter: 1 };
      // Create a new Redux store instance
      const store = configureStore(preloadedState);

      const html = await render({
        req,
        res,
        routes,
        assets,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        customThing: 'thing',
        store
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });

export default server;