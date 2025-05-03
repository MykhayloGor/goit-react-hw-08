import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(setNameFilter(e.target.value));
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