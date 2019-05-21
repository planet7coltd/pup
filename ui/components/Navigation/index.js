import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PublicNavigation from './PublicNavigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import LanguageLocale from '../LanguageLocale';

const Navigation = (props) => {
  const { authenticated } = props;
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">{Meteor.settings.public.productName}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <LanguageLocale />
      </Navbar.Header>
      <Navbar.Collapse>
        {!authenticated ? <PublicNavigation /> : <AuthenticatedNavigation {...props} />}
      </Navbar.Collapse>
    </Navbar>
  );
};

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Navigation;
