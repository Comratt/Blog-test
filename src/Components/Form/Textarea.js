// Absolute import
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { StyledTextarea, Wrapper } from './styled';

const Textarea = ({ type, value, onChane, name, hasError, label }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <StyledTextarea
        id={name}
        value={value}
        type={type}
        name={name}
        onChange={onChane}
        hasError={hasError}
      />
    </Wrapper>
  );
};

Textarea.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChane: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
};

Textarea.defaultProps = {
  type: 'text',
  value: '',
  label: '',
  hasError: false,
};

export default Textarea;
