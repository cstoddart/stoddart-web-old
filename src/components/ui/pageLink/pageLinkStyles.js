import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex
  align-items: center;
  width: 65%;
  margin: 0 auto;
  pointer-events: none;

  ${({ left }) => left ? `
    justify-content: flex-start;
  ` : null}

  ${({ right }) => right ? `
    justify-content: flex-end;
  ` : null}
`;

export const StyledPageLink = styled(Link)`
  border-bottom: 1px solid #fb1;
  pointer-events: all;
  user-select: none;

  ${({ left }) => left ? `
    padding-left: 25px;
    transform: translateX(calc(-100% - 50px));
  ` : null}

  ${({ right }) => right ? `
    padding-right: 25px;
    transform: translateX(calc(100% + 50px));
  ` : null}
`;
