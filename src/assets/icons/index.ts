import React from "react";

import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as Catalog } from "./catalog.svg";

const icons = { Logo, Hamburger, Close, Catalog };

export type IconTypes = keyof typeof icons;

export default (name: IconTypes) => icons[name];
