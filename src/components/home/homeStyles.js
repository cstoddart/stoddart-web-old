import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  pointer-events: all;
  margin-bottom: 50px;
  font-weight: 700;

  strong {
    color: #fb1;
    display: block;
    font-size: 40px;
    line-height: 1;
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
