import { css } from "../index";

import * as gilroyBoldWoff from "./gilroy-bold-webfont.woff";
import * as gilroyBoldWoff2 from "./gilroy-bold-webfont.woff2";
import * as gilroyMediumWoff from "./gilroy-medium-webfont.woff";
import * as gilroyMediumWoff2 from "./gilroy-medium-webfont.woff2";

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
`;
