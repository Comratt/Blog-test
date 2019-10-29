import styled from 'styled-components';
import { Input } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  & > label {
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const StyledInput = styled(Input)`
  border: 1px solid ${props => props.hasError ? 'red' : 'transparent'};
`;

export const StyledTextarea = styled(Input.TextArea)`
  border: 1px solid ${props => props.hasError ? 'red' : 'transparent'};
`;
