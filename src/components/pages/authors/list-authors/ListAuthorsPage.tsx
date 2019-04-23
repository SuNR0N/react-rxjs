import React, { Component } from 'react';
import {
  BehaviorSubject,
  Subscription,
} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AuthorsApi } from '../../../../api/AuthorsApi';
import { IAuthor } from '../../../../models/Author';
import { SearchField } from '../../../common/search-field/SearchField';

export interface IState {
  authors: IAuthor[];
  searchText: string;
}

export class ListAuthorsPage extends Component<{}, IState> {
  public state: IState = {
    authors: [],
    searchText: '',
  };

  private subscription = new Subscription();
  private searchText$ = new BehaviorSubject<string>('');

  public componentDidMount() {
    this.subscription = this.searchText$.pipe(
      debounceTime(500),
    ).subscribe(
      (searchText) => AuthorsApi.searchAuthors(searchText)
        .subscribe((authors) => this.setState({ authors })),
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
        authors,
      },
    } = this;

    return (
      <div className='container-fluid mt-3'>
        <SearchField
          id='searchAuthors'
          label='Search'
          placeholder='Search by name'
          onValueChange={(v) => onValueChange(v)}
        />
        <table className='table table-striped table-dark'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Middle Name</th>
              <th scope='col'>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={index}>
                <th scope='row'>{author.id}</th>
                <td>{author.firstName}</td>
                <td>{author.middleName}</td>
                <td>{author.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
