import styled, { css } from 'styled-components';

export const customButtonStyles = css`
  border: none;
`;

export const CardWrap = styled.div`
  width: 100%;
  border: 2px solid black;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
  & > button {
    border: none;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  margin: 0;
  margin-left: 20px;
  flex-grow: 1;
`;
