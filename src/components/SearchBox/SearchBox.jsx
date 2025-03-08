import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
      <p>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
