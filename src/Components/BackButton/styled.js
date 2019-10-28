import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  & > span {
    font-size: 20px;
    margin-left: 10px;
  }
`;
