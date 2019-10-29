// Absolute import
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { StyledInput, Wrapper } from './styled';

const Input = ({ type, value, onChane, name, isRequired, hasError, label, ...rest }) => {
  return (
    <Wrapper>
      {/* <label htmlFor={name}>{label}</label> */}
      <StyledInput
        addonBefore={label}
        id={name}
        value={value}
        type={type}
        name={name}
        onChange={onChane}
        hasError={hasError}
        {...rest}
      />
    </Wrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChane: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  hasError: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  label: '',
  isRequired: false,
  hasError: false,
};

export default Input;
