import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ list, onDelete }) {
  return (
    <div>
      <ul className={css.contactList}>
        {list.map(({ id, name, number }) => (
          <li className={css.listItem} key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
