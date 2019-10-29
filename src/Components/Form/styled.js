import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  & > label {
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid ${props => props.hasError ? 'red' : 'black'};
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid ${props => props.hasError ? 'red' : 'black'};
`;
