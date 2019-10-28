// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Ripple from '../Ripple';

// Styled
import { StyledButton, StyledLink } from './styled';

const Button = props => {
  const { children, as, href, ...rest } = props;

  const renderContent = () => {
    if (as === 'a') {
      return <StyledLink to={href} {...rest}><Ripple />{children}</StyledLink>;
    }

    return <StyledButton {...rest}><Ripple />{children}</StyledButton>;
  };

  return renderContent();
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  as: PropTypes.string,
};

Button.defaultProps = {
  onClick: f => f,
  className: 'Button',
  as: 'button',
};

export default Button;
