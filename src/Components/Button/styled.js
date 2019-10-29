import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const buttonStyles = css`
  position: relative;
  padding: 5px 10px;
  border: 1px solid #1890ff;
  border-radius: 4px;
  background: transparent;
`;

export const StyledButton = styled.button`
  ${buttonStyles};
  opacity: ${props => (props.disabled ? '.6' : '1')};
  ${props => props.additionalStyles || ''};
`;

export const StyledLink = styled(Link)`
  ${buttonStyles};
  text-decoration: none;
  color: black;
  opacity: ${props => (props.disabled ? '.6' : '1')};
  ${props => props.additionalStyles || ''};
`;
