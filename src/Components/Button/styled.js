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
`;

export const StyledLink = styled(Link)`
  ${buttonStyles};
  text-decoration: none;
  color: black;
`;
