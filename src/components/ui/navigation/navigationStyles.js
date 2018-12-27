import styled from 'styled-components';

import { SITE_WIDTH } from '../../../constants';
import { PhoneIcon as Phone } from '../phoneIcon/PhoneIcon';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: ${SITE_WIDTH};
  width: 65%;
  margin: 0 auto;
  padding-top: 50px;
  position: relative;
  z-index: 1;
  pointer-events: none;
  height: 50px;
`;

export const ButtonText = styled.div`
  margin-right: 15px;

  @media (max-width: 980px) {
    margin: 0;
    display: none;
  }
`;
