import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onFilter = (newValue) => {
    dispatch(changeFilter(newValue));
  };

  return (
    <div className={css.searchBoxLabel}>
      <p>Find contacts by name </p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.inputSearch}
      />
    </div>
  );
};

export default SearchBox;
