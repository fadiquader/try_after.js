import React from 'react'
import { asyncComponent } from '@jaredpalmer/after';

// Internally these will become:
// <Route path={path} exact={exact} render={props => <component {...props} data={data} />} />
const routes = [
    {
        path: '/',
        exact: true,
        component: asyncComponent({
            loader: () => import('../client/Home'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/about',
        component: asyncComponent({
            loader: () => import('../client/About'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
    {
        path: '/detail/:id',
        component: asyncComponent({
            loader: () => import('../client/Detail'), // required
            Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
        }),
    },
];

export default routes;