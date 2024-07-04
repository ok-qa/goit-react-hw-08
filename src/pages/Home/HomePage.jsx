import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        WELCOME
        <br />
        to the Phonebook
      </h1>
    </div>
  );
}
