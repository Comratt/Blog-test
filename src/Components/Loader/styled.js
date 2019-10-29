import styled, { keyframes } from 'styled-components';

const ringAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${props => props.width - 10}px;
    height: ${props => props.width - 10}px;
    margin: 6px;
    border: 6px solid ${props => props.color};
    border-radius: 50%;
    animation: ${ringAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.color} transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
