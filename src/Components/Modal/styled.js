import styled from 'styled-components';

export const Overlay = styled.div`
  z-index: 110;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  z-index: 120;
  max-width: 80%;
  max-height: 80%;
  margin: auto;
  background-color: #fff;
  padding: 15px;
  overflow: auto;
  border-radius: 4px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 24px;
`;
