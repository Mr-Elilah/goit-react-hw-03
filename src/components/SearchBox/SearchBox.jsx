import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
      <label className={css.label} htmlFor="text">
        Find contact by name
      </label>
      <input
        className={css.input}
        id="text"
        type="text"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}
