import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const buttonStyles = css`
  position: relative;
  padding: 5px 10px;
  border: 1px solid #1890ff;
  border-radius: 4px;
`;

export const StyledButton = styled(Button)`
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
