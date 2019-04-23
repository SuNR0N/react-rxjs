import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

import { IAuthor } from '../models/Author';

export class AuthorsApi {
  public static searchAuthors(query?: string) {
    const q = query ? `?q=${query}` : '';
    return ajax(`/api/authors${q}`)
      .pipe(
        map((res) => res.response as IAuthor[]),
      );
  }
}
