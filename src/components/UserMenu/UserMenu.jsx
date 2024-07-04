import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispath = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispath(logout());
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {user.name}!</p>
      <button className={css.button} onClick={handleClick} type="button">
        Sign out
      </button>
    </div>
  );
}
