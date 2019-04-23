import Router from 'koa-router';

import authors from '../data/authors.json';
import { IAuthor } from '../models/author';

export const authorsRouter = new Router();

authorsRouter.get('/', (ctx) => {
  const { q } = ctx.query;

  const filterText: string = (q || '').toLowerCase();
  const filteredAuthors = (authors as IAuthor[])
    .filter((author) =>
      author.firstName.toLowerCase().includes(filterText) ||
      author.middleName.toLowerCase().includes(filterText) ||
      author.middleName.toLowerCase().includes(filterText),
    );

  ctx.body = filteredAuthors;
});
