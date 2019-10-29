// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Ripple from '../Ripple';

// Styled
import { StyledButton, StyledLink } from './styled';

const Button = props => {
  const { children, as, href, disabled, additionalStyles, ...rest } = props;

  const renderContent = () => {
    if (as === 'a') {
      return (
        <StyledLink additionalStyles={additionalStyles} disabled={disabled} to={href} {...rest}>
          <Ripple />
          {children}
        </StyledLink>
      );
    }

    return (
      <StyledButton additionalStyles={additionalStyles} disabled={disabled} {...rest}>
        <Ripple />
        {children}
      </StyledButton>
    );
  };

  return renderContent();
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
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
