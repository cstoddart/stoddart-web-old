import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 65%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 980px) {
    position: static;
  }
`;

export const Content = styled.div`
  text-align: center;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 28px;
  pointer-events: all;
  font-weight: 700;
`;

export const PlusSign = styled.h1`
  color: #fb1;
  display: block;
  font-size: 40px;
  pointer-events: all;
  line-height: 1;
`;
