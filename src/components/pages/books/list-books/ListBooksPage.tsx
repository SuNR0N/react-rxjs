import React, { Component } from 'react';
import {
  BehaviorSubject,
  Subscription,
} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { BooksApi } from '../../../../api/BooksApi';
import { IBook } from '../../../../models/Book';
import { SearchField } from '../../../common/search-field/SearchField';

export interface IState {
  books: IBook[];
  searchText: string;
}

export class ListBooksPage extends Component<{}, IState> {
  public state: IState = {
    books: [],
    searchText: '',
  };

  private subscription = new Subscription();
  private searchText$ = new BehaviorSubject<string>('');

  public componentDidMount() {
    this.subscription = this.searchText$.pipe(
      debounceTime(500),
    )
      .subscribe(
        (searchText) => BooksApi.searchBooks(searchText)
          .subscribe((books) => this.setState({ books })),
      );
  }

  public componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  public onValueChange = (value: string) => {
    this.searchText$.next(value);
  }

  public render() {
    const {
      onValueChange,
      state: {
        books,
      },
    } = this;

    return (
      <div className='container-fluid mt-3'>
        <SearchField
          id='searchBooks'
          label='Search'
          placeholder='Search by title'
          onValueChange={(v) => onValueChange(v)}
        />
        <table className='table table-striped table-dark'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>ISBN</th>
              <th scope='col'>Title</th>
              <th scope='col'>Publication Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <th scope='row'>{book.id}</th>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.publicationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
