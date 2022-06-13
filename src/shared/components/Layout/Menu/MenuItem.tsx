import { NavLink } from "react-router-dom";

import { MenuItemModel } from "../models/menuItem-model";
import styles from "./MenuItem.module.css";

const MenuItem = (props: MenuItemModel) => {
  return (
    <li className={styles.menuItem} onClick={props.onMenuClick}>
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default MenuItem;
