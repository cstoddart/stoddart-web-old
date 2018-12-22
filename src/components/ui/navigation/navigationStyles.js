import styled from 'styled-components';

import { SITE_WIDTH } from '../../../constants';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
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
