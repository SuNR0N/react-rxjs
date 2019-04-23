import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavigationBarComponent: FunctionComponent = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a
        className='navbar-brand'
        href='#'>React RxJS
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navigation-bar__dropdown'
        aria-controls='navigation-bar__dropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse'
        id='navigation-bar__dropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/authors'>Authors
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/books'>Books
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export const NavigationBar = withRouter(NavigationBarComponent);
