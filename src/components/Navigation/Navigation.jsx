import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.mainNavigation}>
      <ul className={css.navList}>
        <li>
          <NavLink className={getLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink className={getLinkClass} to="/contacts">
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
