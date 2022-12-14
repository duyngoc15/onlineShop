// layout
import config from '~/config';
import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Product from '~/pages/Product';
import Search from '~/pages/Search';
// publicRoutes
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: config.routes.showProduct,
    component: Following,
  },
  {
    path: '/product',
    component: Product,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];
const privateRoutes = [
  {
    path: '/profile',
    component: Profile,
  },
];

export { publicRoutes, privateRoutes };
