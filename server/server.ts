import Koa from 'koa';

import { appRouter } from './routers';

export const server = new Koa();

server.use(appRouter.routes());
