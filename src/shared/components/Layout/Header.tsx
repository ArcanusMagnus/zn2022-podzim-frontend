import { Link } from "react-router-dom";
import { useState, MouseEvent } from "react";

import Menu from "./Menu/Menu";
import useScreenResolution from "../../hooks/use-resolution";

import styles from "./Header.module.css";
import navLogo from "../../assets/images/nav_logo.png";

const Header = () => {
  const { width } = useScreenResolution();
  const [burgerActive, setBurgerActive] = useState(false);

  const burgerClickHandler = () => {
    setBurgerActive((prevState) => {
      return !prevState;
    });
  };

  const menuClickHandler = (event: MouseEvent<HTMLLIElement>) => {
    burgerClickHandler();
  };

  const burgerClasses =
    styles.burger + (burgerActive ? " " + styles["burger-open"] : "");

  const burger = (
    <div className={burgerClasses} onClick={burgerClickHandler}>
      <span className={styles["burger-topBar"]}></span>
      <span className={styles["burger-middleBar"]}></span>
      <span className={styles["burger-bottomBar"]}></span>
    </div>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles["header-left"]}>
          <Link to="/">
            <img src={navLogo} alt="Žižkovská noc logo" />
          </Link>
          <p className={styles["header-left__date"]}>22. až 24. září</p>
        </div>
        {width < 1350 && burger}
        {width >= 1350 && (
          <Menu onMenuClick={menuClickHandler} mobileMenu={false} />
        )}
      </header>
      {width < 1350 && (
        <Menu
          onMenuClick={menuClickHandler}
          mobileMenu={true}
          open={burgerActive}
        />
      )}
    </>
  );
};

export default Header;
