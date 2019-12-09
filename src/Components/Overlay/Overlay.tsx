import React from "react";
import { CSSTransition } from "react-transition-group";

import { Wrapper } from "./elements";

export const Overlay: React.FC<{
  overlayStatus: boolean;
  onClick: () => void;
}> = ({ overlayStatus, onClick }) => (
  <CSSTransition
    in={overlayStatus}
    timeout={200}
    classNames="overlay"
    unmountOnExit
  >
    <Wrapper onClick={onClick} />
  </CSSTransition>
);
