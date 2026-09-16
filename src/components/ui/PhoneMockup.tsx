import type { ReactNode } from 'react';
import styled from 'styled-components';

interface PhoneMockupProps {
    children: ReactNode;
    className?: string;
}


export default function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
    return (
        <StyledWrapper className={className}>
            <div className="card">
                <div className="btn1" />
                <div className="btn2" />
                <div className="btn3" />
                <div className="btn4" />
                <div className="card-int">
                    {children}
                </div>
                <div className="top">
                    <div className="camera">
                        <div className="int" />
                    </div>
                    <div className="speaker" />
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  width: 100%;

  .card {
    width: 100%;
    aspect-ratio: 210 / 400;
    background: black;
    border-radius: 35px;
    border: 2px solid rgb(40, 40, 40);
    padding: 7px;
    position: relative;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.486);
  }

  .card-int {
    background: #0f172a;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
  }

  .card-int video,
  .card-int img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  .top {
    position: absolute;
    top: 0px;
    right: 50%;
    transform: translate(50%, 0%);
    width: 35%;
    height: 18px;
    background-color: black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 10;
  }

  .speaker {
    position: absolute;
    top: 2px;
    right: 50%;
    transform: translate(50%, 0%);
    width: 40%;
    height: 2px;
    border-radius: 2px;
    background-color: rgb(20, 20, 20);
  }

  .camera {
    position: absolute;
    top: 6px;
    right: 84%;
    transform: translate(50%, 0%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.048);
  }

  .int {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background-color: rgba(0, 0, 255, 0.212);
  }

  .btn1, .btn2, .btn3, .btn4 {
    position: absolute;
    width: 2px;
  }

  .btn1, .btn2, .btn3 {
    height: 45px;
    top: 30%;
    right: -4px;
    background-image: linear-gradient(to right, #111111, #222222, #333333, #464646, #595959);
  }

  .btn2, .btn3 {
    transform: scale(-1);
    left: -4px;
  }

  .btn2, .btn3 {
    transform: scale(-1);
    height: 30px;
  }

  .btn2 {
    top: 26%;
  }

  .btn3 {
    top: 36%;
  }
`;
