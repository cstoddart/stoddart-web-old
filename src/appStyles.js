import styled, { createGlobalStyle } from 'styled-components';
import Particles from 'react-particles-js';

import { SITE_WIDTH } from './constants';
import bitterBold from './assets/fonts/bitterBold.ttf';
import montserratMedium from './assets/fonts/montserratMedium.ttf';
import montserratSemiBold from './assets/fonts/montserratSemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Bitter;
    font-weight: 700;
    src: url(${bitterBold});
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 500;
    src: url(${montserratMedium});
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 600;
    src: url(${montserratSemiBold});
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: #222;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    color: white;
  }

  a {
    text-decoration: none;
    color: #fb1;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }
`;

export const AppContent = styled.div`
  max-width: ${SITE_WIDTH};
  width: 65%;
  margin: 0 auto;
  pointer-events: none;
  position: relative;
  min-height: calc(100% - 150px);
`;
