import React from 'react';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import i18n from 'meteor/universe:i18n';
import Icon from '../Icon';

class LanguageLocale extends React.Component {
  handleSelect(eventKey) {
    event.preventDefault();
    switch (eventKey) {
      case 1.1:
        i18n.setLocale('zh-CN');
        break;
      case 1.2:
        i18n.setLocale('en-US');
        break;
      default:
        i18n.setLocale('zh-CN');
        break;
    }
  }

  render() {
    return (
      <Nav>
        <NavDropdown
          noCaret
          eventKey={1}
          id="nav-language-dropdown"
          title={
            <span>
              <Icon iconStyle="solid" icon="map-marker-alt" />
            </span>
          }
          onSelect={this.handleSelect}
        >
          <MenuItem eventKey={1.1}>{i18n.getTranslation('common.zh-CN')}</MenuItem>
          <MenuItem eventKey={1.2}>{i18n.getTranslation('common.en-US')}</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

export default LanguageLocale;
