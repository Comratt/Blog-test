import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px;
  border: 2px solid black;
  margin-bottom: 10px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Email = styled.a`
  font-size: 20px;
  color: blue;
  text-decoration: underline;
`;

export const Body = styled.p`
  font-size: 18px;
`;
