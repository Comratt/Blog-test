import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const buttonStyles = css`
  border: 2px solid black;
  padding: 15px 25px;
  cursor: pointer;
  display: flex;
  position: relative;
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
