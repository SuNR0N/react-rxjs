import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

import { IBook } from '../models';

export class BooksApi {
  public static searchBooks(query?: string) {
    const q = query ? `?q=${query}` : '';
    return ajax(`/api/books${q}`)
      .pipe(
        map((res) => res.response as IBook[]),
      );
  }
}
