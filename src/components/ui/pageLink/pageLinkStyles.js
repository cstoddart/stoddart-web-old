import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from '../../../constants';

export const Container = styled.div`
  position: absolute;
  top: ${(window.innerHeight / 2) - 100}px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  pointer-events: none;
  display: flex;
  align-items: flex-start;

  ${({ left }) => left ? `
    justify-content: flex-start;
  ` : null}

  ${({ right }) => right ? `
    justify-content: flex-end;
  ` : null}
`;

export const StyledPageLink = styled(Link)`
  border-bottom: 2px solid ${COLORS.YELLOW};
  pointer-events: all;
  user-select: none;
  font-weight: 600;

  ${({ left }) => left ? `
    padding-left: 25px;
    transform: translateX(calc(-100% - 50px));

    @media (max-width: 980px) {
      font-size: 0px;
      position: relative;
      padding-left: 10px;
      transform: translateX(calc(-100% - 25px));

      &:after {
        content: '<';
        font-size: 14px;
      }
    }
  ` : null}

  ${({ right }) => right ? `
    padding-right: 25px;
    transform: translateX(calc(100% + 50px));

    @media (max-width: 980px) {
      font-size: 0px;
      position: relative;
      padding-right: 10px;
      transform: translateX(calc(100% + 25px));

      &:after {
        content: '>';
        font-size: 14px;
      }
    }
  ` : null}
`;
