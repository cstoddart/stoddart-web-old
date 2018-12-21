import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  pointer-events: all;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;

  strong {
    color: #fb1;
    font-family: Bitter;
  }
`;
