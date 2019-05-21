import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import i18n from 'meteor/universe:i18n';

const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="/signup">
      <NavItem eventKey={1} href="/signup">
        {i18n.getTranslation('common.Signup')}
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/login">
      <NavItem eventKey={2} href="/login">
        {i18n.getTranslation('common.Login')}
      </NavItem>
    </LinkContainer>
  </Nav>
);

export default PublicNavigation;
