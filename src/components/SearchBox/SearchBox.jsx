import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor="search" className={s.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
        className={s.input}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
