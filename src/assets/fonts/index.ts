import { css } from "../../styles/index";

import * as gilroyBoldWoff from "./gilroy-bold.woff";
import * as gilroyBoldWoff2 from "./gilroy-bold.woff2";
import * as gilroyMediumWoff from "./gilroy-medium.woff";
import * as gilroyMediumWoff2 from "./gilroy-medium.woff2";
import * as gilroyLightmWoff from "./gilroy-light.woff";
import * as gilroyLightWoff2 from "./gilroy-light.woff2";

export default css`
  @font-face {
    font-family: 'Gilroy';
    src: url('${gilroyMediumWoff2}') format('woff2'),
         url('${gilroyMediumWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('${gilroyBoldWoff2}') format('woff2'),
         url('${gilroyBoldWoff}') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('${gilroyLightWoff2}') format('woff2'),
         url('${gilroyLightmWoff}') format('woff');
    font-weight: lighter;
    font-style: normal;
  }
`;
