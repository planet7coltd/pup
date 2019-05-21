import React from 'react';
import PropTypes from 'prop-types';

const getIconStyle = (iconStyle) =>
  ({
    regular: 'far',
    solid: 'fas',
    light: 'fal',
    brand: 'fab',
  }[iconStyle]);

const getIconSize = (iconSize) =>
  ({
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    x2: '2x',
    x3: '3x',
    x4: '4x',
    x5: '5x',
    x6: '6x',
    x7: '7x',
    x8: '8x',
    x9: '9x',
    x10: '10x',
  }[iconSize]);

const Icon = ({ iconStyle, icon, iconSize }) => (
  <i className={`${getIconStyle(iconStyle)} fa-${icon} fa-${getIconSize(iconSize)}`} />
);

Icon.defaultProps = {
  iconStyle: 'regular',
  iconSize: 'lg',
};

Icon.propTypes = {
  iconStyle: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
};

export default Icon;
