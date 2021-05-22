import { NavLink } from "react-router-dom";
import PageList from "./PageList";
import Quote from "./Quote";
import styles from "./Navigation.module.css";
import { USER_DATA } from "../../data/home/user-data";

const Navigation = ({ sidebar }) => {
  let showNav;
  if (sidebar) {
    showNav = styles.nav + " " + styles.active;
  } else if (!sidebar) {
    showNav = styles.nav;
  }
  return (
    <div>
      <nav className={showNav}>
        <div className={styles.container}>
          <NavLink className={styles.logo} to="/">
            {USER_DATA.name}
          </NavLink>
        </div>
        <PageList />
        <Quote />
      </nav>
    </div>
  );
};

export default Navigation;
