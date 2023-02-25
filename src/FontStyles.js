import { createGlobalStyle } from "styled-components";

import ProximaLightWoff from "./fonts/ProximaNova-Light.woff";
import ProximaRegularWoff from "./fonts/ProximaNova-Regular.woff";
import ProximaSemiboldWoff from "./fonts/ProximaNova-Semibold.woff";
import ProximaBoldWoff from "./fonts/ProximaNova-Bold.woff";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Proxima Nova';
  src: url(${ProximaLightWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
  }
@font-face {
  font-family: 'Proxima Nova';
  src: url(${ProximaRegularWoff}) format('woff');
  font-weight: 400;
  font-style: normal;
  }
@font-face {
  font-family: 'Proxima Nova';
  src: url(${ProximaSemiboldWoff}) format('woff');
  font-weight: 600;
  font-style: normal;
  }
@font-face {
  font-family: 'Proxima Nova';
  src: url(${ProximaBoldWoff}) format('woff');
  font-weight: 700;
  font-style: normal;
  }

  body {
  font-family: 'Proxima Nova', sans-serif;
}
`;

export default FontStyles;
