import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import AuthNav from "../AuthNavigation/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./NavBar.module.css";

export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.wrapperHeader}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
