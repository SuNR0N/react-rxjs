import Router from 'koa-router';

import { API_ROOT_PATH } from '../config';
import { authorsRouter } from './authors.router';
import { booksRouter } from './books.router';

export const appRouter = new Router({
  prefix: API_ROOT_PATH,
});

appRouter.use(
  '/books',
  booksRouter.routes(),
  booksRouter.allowedMethods(),
);

appRouter.use(
  '/authors',
  authorsRouter.routes(),
  authorsRouter.allowedMethods(),
);
