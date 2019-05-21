import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import i18n from 'meteor/universe:i18n';
import PublicNavigation from '.';

jest.mock('meteor/universe:i18n');

describe('PublicNavigation.js', () => {
  test('PublicNavigation renders correctly', () => {
    // arrange
    const signup = 'common.Signup';
    const login = 'common.Login';

    i18n.getTranslation.mockReturnValueOnce('Sign Up').mockReturnValueOnce('Log In');

    // action
    const tree = renderer
      .create(
        <MemoryRouter>
          <PublicNavigation />
        </MemoryRouter>,
      )
      .toJSON();

    // assert
    expect(i18n.getTranslation).toHaveBeenCalledWith(signup);
    expect(i18n.getTranslation).toHaveBeenCalledWith(login);

    expect(tree).toMatchInlineSnapshot(`
      <ul
        className="nav pull-right"
        role={null}
      >
        <li
          className=""
          role="presentation"
        >
          <a
            href="/signup"
            onClick={[Function]}
            onKeyDown={[Function]}
          >
            Sign Up
          </a>
        </li>
        <li
          className=""
          role="presentation"
        >
          <a
            href="/login"
            onClick={[Function]}
            onKeyDown={[Function]}
          >
            Log In
          </a>
        </li>
      </ul>
    `);
  });
});
