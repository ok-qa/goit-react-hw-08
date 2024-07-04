import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>WELCOME</h1>
      <h2 className={css.title}>to the Phonebook</h2>
    </div>
  );
}
