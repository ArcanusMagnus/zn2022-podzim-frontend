import { MouseEventHandler } from "react";

export type MenuItemModel = {
  link: string;
  onMenuClick: MouseEventHandler<HTMLLIElement>;
  children: string;
};
