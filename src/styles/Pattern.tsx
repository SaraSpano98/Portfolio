import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
      {/* Il tuo Logo o Contenuto della Hero va qui */}
      <div className="content">
        {/* <YourLogo /> */}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #ffffff; /* Base pulita */

  .container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /* Primo strato di colore rotante */
  .container::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      #1a3c68, /* Il tuo Blu */
      #ffffff, /* Il tuo Bianco */
      #ec90e6, /* Il tuo Rosa */
      #ffffff,
      #1a3c68
    );
    transform: translate(-50%, -50%);
    animation: rotate 15s linear infinite;
    filter: blur(80px);
    opacity: 0.6;
  }

  /* Secondo strato rotante in senso opposto per profondità */
  .container::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 180%;
    height: 180%;
    background: conic-gradient(
      from 0deg,
      #ec90e6,
      #ffffff,
      #1a3c68,
      #ec90e6
    );
    transform: translate(-50%, -50%);
    animation: rotate-reverse 20s linear infinite;
    filter: blur(100px);
    opacity: 0.4;
  }

  .content {
    position: relative;
    z-index: 10;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes rotate-reverse {
    from {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`;

export default Pattern;
