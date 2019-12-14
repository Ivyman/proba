import { Maybe } from "true-myth";

import Logo from "./logo";
import Hamburger from "./hamburger";
import Close from "./close";
import Catalog from "./catalog";
import Contact from "./contact";

const icons = { Logo, Hamburger, Close, Catalog, Contact };

export type IconTypes = keyof typeof icons;

export default (name: Maybe<IconTypes>) =>
  icons[name.map((value: IconTypes) => value).unwrapOr("Logo")];
