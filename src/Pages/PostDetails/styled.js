import styled from 'styled-components';

export const Head = styled.div`
  display: flex;
`;

export const Title = styled.p`
  font-size: 24px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const Body = styled.div``;

export const PostTitle = styled.p`
  font-size: 26px;
`;

export const PostDescription = styled.p`
  font-size: 20px;
`;

export const CommentActions = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const CommentButton = styled.span`
  font-size: 20px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;
