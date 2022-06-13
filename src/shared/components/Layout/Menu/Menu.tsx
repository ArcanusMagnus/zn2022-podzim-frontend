import MenuItem from "./MenuItem";

import { MenuModel } from "../models/menu-model";
import styles from "./Menu.module.css";
import { MouseEvent } from "react";

const Menu = (props: MenuModel) => {

  const menuClickHandler = (event: MouseEvent<HTMLLIElement>) => {
    props.onMenuClick(event);
  };

  let menuType = props.mobileMenu ? styles.mobileMenu : styles.menu;
  if (props.open) {
    menuType += " " + styles.active;
  }
  // maybe add localstorage or cookie about current position
  return (
    <ul className={menuType}>
      <MenuItem
        link="/"
        onMenuClick={menuClickHandler}
      >
        Neznáme hranice
      </MenuItem>
      {/* <MenuItem
        link="/program"
        onMenuClick={menuClickHandler}
      >
        Program
      </MenuItem> */}
      {/* <MenuItem
        link="merch"
        onMenuClick={menuClickHandler}
      >
        Merchandise
      </MenuItem> */}
      <MenuItem
        link="/vysilac"
        onMenuClick={menuClickHandler}
      >
        Vysílač
      </MenuItem>
      <MenuItem
        link="/pozorumeni"
        onMenuClick={menuClickHandler}
      >
        PozorUmění
      </MenuItem>
      <MenuItem
        link="/about"
        onMenuClick={menuClickHandler}
      >
        O festivalu
      </MenuItem>
    </ul>
  );
};

export default Menu;
