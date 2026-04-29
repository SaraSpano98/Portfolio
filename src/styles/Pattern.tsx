import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return <StyledWrapper />;
};

const StyledWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;

  &::before, &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200vmax;
    height: 200vmax;
    opacity: 0.4;
    filter: blur(80px);
    transform-origin: center;
  }

  &::before {
    background: conic-gradient(from 0deg, #1a3c68, #ffffff, #ec90e6, #ffffff, #1a3c68);
    animation: rotate 20s linear infinite;
  }

  &::after {
    background: conic-gradient(from 180deg, #ec90e6, #ffffff, #1a3c68, #ffffff, #ec90e6);
    animation: rotate 25s linear reverse infinite;
    opacity: 0.2;
  }

  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

export default Pattern;


