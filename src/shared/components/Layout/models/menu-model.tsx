import { MouseEventHandler } from "react";

export type MenuModel = {
    mobileMenu: boolean;
    onMenuClick: MouseEventHandler<HTMLLIElement>;
    open?: boolean
}