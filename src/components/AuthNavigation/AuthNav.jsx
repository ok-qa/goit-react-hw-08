import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.navWrapper}>
      <ul className={css.listNav}>
        <li>
          <NavLink className={getLinkClass} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
