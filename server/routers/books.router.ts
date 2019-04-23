import Router from 'koa-router';

import books from '../data/books.json';
import { IBook } from '../models/book';

export const booksRouter = new Router();

booksRouter.get('/', (ctx) => {
  const { q } = ctx.query;

  const filterText: string = (q || '').toLowerCase();
  const filteredBooks = (books as IBook[])
    .filter((book) => book.title.toLowerCase().includes(filterText));

  ctx.body = filteredBooks;
});
